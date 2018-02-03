import * as path from 'path';
import * as fs from 'fs';
import * as Shell from 'shelljs';
import * as child_process from 'child_process';
import * as chokidar from 'chokidar';

import { Program } from './program';
import { setTimeout } from 'timers';

export class Watch extends Program {
    names = ['watch'];

    private hasSocket: boolean = fs.existsSync(path.join(process.cwd(), '../demo/server.js'));
    private demoNpm = 'npm --prefix ' + path.join(process.cwd(), '../demo ');
    private serverProcess: child_process.ChildProcess;
    private reloading: boolean = false;
    private pendingReload: boolean = false;

    man(indent) {
        console.log(indent + "watch");
        console.log(indent + "  run from feature root dir. Watches for file changes in src and applies them to demo");
    }

    exec(args) {

        if(this.hasSocket) {
            Shell.exec(
                this.demoNpm + 'run build -- --watch', 
                { async: true }
            );

        } else {
            Shell.exec(
                this.demoNpm + 'start',
                { async: true }
            );
        }
        
        this.reload();

        fs.watch(
            process.cwd(),
            { recursive: true }, 
            (eventType, filename) => {
                console.log('changed file: ' + filename);

                let ext = filename.split('.').pop();
                if(ext !== 'tgz') {
                    this.reload();
                }
            }
        );
        
        return 'done';
    }

    reload() {
        console.log('attempting reload: ' + this.reloading);
        if(!this.reloading) {
            console.log("RELOADING");
            
            this.reloading = true;
            Shell.exec('tygr pack');
            Shell.exec(this.demoNpm + 'i ../latest.tgz');
        
            if(this.hasSocket) {
                if(this.serverProcess) {
                    console.log("killing server process");
                    this.serverProcess.addListener('close', () => {
                        console.log('server closed');
                        this.serverProcess = Shell.exec('node ../demo/server.js', {async: true}) as child_process.ChildProcess;
                        this.reloading = false;
                        if(this.pendingReload) {
                            this.pendingReload = false;
                            console.log("pending reload started");
                            this.reload();
                        }
                    });

                    this.serverProcess.kill('SIGKILL');

                } else {
                    this.serverProcess = Shell.exec('node ../demo/server.js', {async: true}) as child_process.ChildProcess;
                    this.reloading = false;
                }
            }
        } else {
            this.pendingReload = true;
        }
    }
}

