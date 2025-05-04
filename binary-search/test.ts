import { binarySearch } from './index';

describe('binarySearch', () => {
  test('basic search in a sorted array of numbers', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(9);
  });

  test('element not in array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)).toBe(-1);
  });

  test('empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('array with one element', () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 41)).toBe(-1);
  });

  test('array with duplicate elements', () => {
    const index = binarySearch([1, 2, 2, 3, 3, 3, 4, 5, 6], 3);
    expect(index).toBeGreaterThanOrEqual(3);
    expect(index).toBeLessThanOrEqual(5);
  });

  test('array with negative numbers', () => {
    expect(binarySearch([-10, -5, 0, 5, 10], -10)).toBe(0);
    expect(binarySearch([-10, -5, 0, 5, 10], 0)).toBe(2);
  });

  test('binary search with strings', () => {
    expect(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'apple')).toBe(0);
    expect(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'cherry')).toBe(2);
    expect(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'grape')).toBe(-1);
  });
});