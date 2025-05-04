import { insertionSort } from './index';

describe('insertionSort', () => {
  test('empty array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('array of one element', () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  test('array with multiple elements', () => {
    expect(insertionSort([4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('array with negative numbers', () => {
    expect(insertionSort([-3, -1, -2, 0, 2])).toEqual([-3, -2, -1, 0, 2]);
  });

  test('array with duplicate elements', () => {
    expect(insertionSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('sorted array', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('reverse sorted array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
