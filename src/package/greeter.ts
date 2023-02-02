import { inject, injectable } from 'tsyringe';
import type { IConfig } from './config';

export interface IGreeter {
  greet(): string;
}

@injectable()
export class Greeter implements IGreeter {
  constructor(@inject('Config') private readonly config: IConfig) {}

  public greet(): string {
    return `Hello ${this.config.getName()}!`;
  }
}

export const greeterSymbol = Symbol('Greeter');
