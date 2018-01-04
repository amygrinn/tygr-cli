import * as Shell from 'shelljs';

export abstract class Program {
  abstract name: string;
  man(indent: string = ''): void { Shell.echo(indent + this.name); }
  abstract exec(args: string[]): void;
}

export class CombinedProgram extends Program {

  private programMap = {};
  private programs: Program[];

  constructor(
    public name: string,
    Programs
  ) {
    super();
    console.log("creating", name);
    this.programs = Programs.map(Program => new Program())
    this.programs.forEach(p =>
      this.programMap[p.name] = p.exec
    );
  }

  man(indent = '') {
    Shell.echo(indent + this.name);
    this.programs.forEach(p => p.man(indent + '  '));
  }

  exec(args) {
    const program = args[0];

    if (program === 'help' || program === '-h') {
      console.log(this);
      this.man();
    } else if (this.programMap[program]) {
      console.log(this);
      console.log(program);
      this.programMap[program](args.slice(1));
    } else {
      Shell.echo(`${program} is not a valid program.`)
      this.man();
    }
  }
}
