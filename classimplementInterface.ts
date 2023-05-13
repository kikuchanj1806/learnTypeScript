import { hasPrint } from "./interfaceForClass";

export class Invoice implements hasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print(): string {
    return `${this.client} owers ${this.amount} dollar for this work: ${this.work}`;
  }
}

export class payments implements hasPrint {
  constructor(
    readonly recipient: string,
    private jods: string,
    public amt: number
  ) {}

  print(): string {
    return `I owe ${this.recipient} ${this.amt} dollar for this jod: ${this.jods}`;
  }
}
