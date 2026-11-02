import { describe, expect, it } from 'vitest';
import { add, hello } from '../src/index.js';

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('hello', () => {
  it('returns a greeting', () => {
    expect(hello()).toBe('Hello, world!');
  });
});
