import React from 'react';
import { todosMock } from '../mocks/functions.mocks';
import { addDoneTodos } from './functions';

test('addDoneTodos gets an array of todos and return the done and undone todos', () => {
  const todosAdded = addDoneTodos(todosMock);
  expect(todosAdded.done).toBe(1);
  expect(todosAdded.undone).toBe(2);
});

test('addDoneTodos gets an empty array of todos and returs 0 for both done and undone todos', () => {
  const todosAdded = addDoneTodos([]);
  expect(todosAdded.done).toBe(0);
  expect(todosAdded.undone).toBe(0);
});
