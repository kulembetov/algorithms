import { bubbleSort } from './index';

describe('bubbleSort', () => {
  test('empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test('array of one element', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  test('array with multiple elements', () => {
    expect(bubbleSort([4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('array with negative numbers', () => {
    expect(bubbleSort([-3, -1, -2, 0, 2])).toEqual([-3, -2, -1, 0, 2]);
  });

  test('array with duplicate elements', () => {
    expect(bubbleSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('reverse sorted array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
