import { binarySearch } from './index';

const testBinarySearch = () => {
  // test case 1: basic search in a sorted array of numbers
  console.assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) === 0, 'Failed to find 1 at index 0');
  console.assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) === 4, 'Failed to find 5 at index 4');
  console.assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10) === 9, 'Failed to find 10 at index 9');
  
  // test case 2: element not in array
  console.assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11) === -1, 'Should return -1 for element not in array');
  console.assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0) === -1, 'Should return -1 for element not in array');
  
  // test case 3: empty array
  console.assert(binarySearch([], 1) === -1, 'Should return -1 for empty array');
  
  // test case 4: array with one element
  console.assert(binarySearch([42], 42) === 0, 'Failed to find element in single-element array');
  console.assert(binarySearch([42], 41) === -1, 'Should return -1 for element not in single-element array');
  
  // test case 5: array with duplicate elements
  // binary search will find one of the duplicates, but we can't guarantee which one
  const index = binarySearch([1, 2, 2, 3, 3, 3, 4, 5, 6], 3);
  console.assert(index >= 3 && index <= 5, 'Should find an index of a duplicate element');
  
  // test case 6: array with negative numbers
  console.assert(binarySearch([-10, -5, 0, 5, 10], -10) === 0, 'Failed to find -10 at index 0');
  console.assert(binarySearch([-10, -5, 0, 5, 10], 0) === 2, 'Failed to find 0 at index 2');
  
  // test case 7: binary search with strings
  console.assert(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'apple') === 0, 'Failed to find "apple" at index 0');
  console.assert(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'cherry') === 2, 'Failed to find "cherry" at index 2');
  console.assert(binarySearch(['apple', 'banana', 'cherry', 'date', 'elderberry'], 'grape') === -1, 'Should return -1 for string not in array');

  console.log('All tests passed!');
};

testBinarySearch();