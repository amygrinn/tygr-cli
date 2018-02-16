import * as fs from 'fs';
import * as path from 'path';
import * as Shell from 'shelljs';

import { Program } from './program';

export class Pack extends Program {
    names = ['pack', 'p'];

    man(indent) {
        console.log(indent + 'pack (p) ?[...--tags]');
        console.log(indent + '  pack the current package and symlink it to any tags. "latest" tag is automatically linked');
        console.log(indent + '  This will overwrite the previous build if you do not increment the package.json version');
    }

    exec(args: string[]) {

        const root = path.join(process.cwd(), '../');
        const buildsPath = path.join(process.cwd(), '../builds');

        const packName = Shell.exec("npm pack").stdout.trim();
        
        if(!fs.existsSync(buildsPath)) {
            fs.mkdirSync(buildsPath);
        }

        fs.copyFileSync(path.join(process.cwd(), packName), path.join(buildsPath, packName));
        fs.unlinkSync(path.join(process.cwd(), packName));

        const packPath = path.join(buildsPath, packName);

        const tags = ['latest'].concat(args.map(tag => tag.slice(2)));

        tags.forEach(tag => {
            const tagPath = path.join(root, tag + '.tgz');

            if(fs.existsSync(tagPath)) {
                fs.unlinkSync(tagPath);
            }

            fs.copyFileSync(packPath, tagPath);
        });

        return 'done';
    }
}