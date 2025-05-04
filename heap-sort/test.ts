import { heapSort } from './index';

describe('heapSort', () => {
  test('empty array', () => {
    expect(heapSort([])).toEqual([]);
  });

  test('array of one element', () => {
    expect(heapSort([1])).toEqual([1]);
  });

  test('array with multiple elements', () => {
    expect(heapSort([4, 2, 5, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test('array with negative numbers', () => {
    expect(heapSort([-3, -1, -2, 0, 2])).toEqual([-3, -2, -1, 0, 2]);
  });

  test('array with duplicate elements', () => {
    expect(heapSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  test('sorted array', () => {
    expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('reverse sorted array', () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
