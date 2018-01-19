import * as Shell from 'shelljs';

export class Program {
  names: string[] = [''];

  man(indent: string = ''): void { Shell.echo(indent + this.getName()); }

  exec(args: string[]): string {
    Shell.echo(this.getName());
    return this.names[0];
  }

  getName(): string {
    let name = this.names[0];

    if (this.names.length > 1) {
      name += ' ('
      this.names.slice(1).forEach(n => name += ` ${n} `);
      name += ')';
    }

    return name;
  }
}

export class CombinedProgram extends Program {

  private programMap = {};
  private programs: Program[];

  constructor(
    public names: string[],
    private Programs: typeof Program[],
    private auto?: typeof Program
  ) {
    super();

    this.programs = Programs.map(Program => new Program())
    this.programs.forEach(p =>
      p.names.forEach(name =>
        this.programMap[name] = p
      )
    );
  }

  man(indent: string = '') {
    Shell.echo(indent + this.getName());
    this.programs.forEach(p => p.man(indent + '  '));
  }

  exec(args: string[]) {
    const program = args[0];

    if (program === 'help' || program === '-h') {
      this.man();
    } else if (this.programMap[program]) {
      return this.programMap[program].exec(args.slice(1));
    } else if (this.auto) {
      return (new this.auto()).exec(args);
    } else {
      Shell.echo(`${program} is not a valid program.`)
      this.man();
    }
  }
}
