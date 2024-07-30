// src/js/__tests__/characters.test.js
import Character from '../characters/Character';
import Bowman from '../characters/Bowman';

test('Character cannot be instantiated directly', () => {
  expect(() => new Character(1)).toThrow('Cannot instantiate Character directly');
});

test('Bowman should be created with correct attributes', () => {
  const bowman = new Bowman(1);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
  expect(bowman.health).toBe(50);
  expect(bowman.type).toBe('bowman');
});