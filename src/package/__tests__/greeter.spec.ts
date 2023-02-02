import 'reflect-metadata';
import { describe, it, expect } from 'vitest';
import { container } from 'tsyringe';
import type { IConfig } from '../config';
import { Greeter } from '../greeter';

describe('Greeter', () => {
  it('should return the name', () => {
    const name = 'Bob';
    container.register<IConfig>('Config', {
      useValue: { getName: () => name },
    });
    const greeter = container.resolve(Greeter);

    // Act
    const result = greeter.greet();

    // Assert
    expect(result).toBe('Hello Bob!');
  });
});
