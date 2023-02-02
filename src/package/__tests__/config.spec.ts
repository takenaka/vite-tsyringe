import 'reflect-metadata';
import { describe, it, expect } from 'vitest';
import { Config } from '../config';

describe('Config', () => {
  it('should return the name', () => {
    const name = 'Bob';
    const config = new Config(name);

    // Act
    const result = config.getName();

    // Assert
    expect(result).toBe('Bob from Config');
  });
});
