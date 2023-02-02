import { injectable } from 'tsyringe';

export interface IConfig {
  getName(): string;
}

@injectable()
export class Config implements IConfig {
  constructor(private readonly name: string) {}

  public getName(): string {
    return this.name + ' from Config';
  }
}
