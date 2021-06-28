import selectionSort from '@ts/exercise/selectionSort';

test('selection sort [1, 3, 2, 123, 52, 2]', () => {
  expect(selectionSort([1, 3, 2, 123, 52, 2]).toBe(1, 2, 2, 3, 52, 123));
})