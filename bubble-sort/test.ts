import { bubbleSort } from './index';

const testBubbleSort = () => {
  // test 1: empty array
  console.assert(
    JSON.stringify(bubbleSort([])) === JSON.stringify([]),
    'Test 1 Failed: Should return an empty array.'
  );

  // test 2: array of one element
  console.assert(
    JSON.stringify(bubbleSort([1])) === JSON.stringify([1]),
    'Test 2 Failed: Should return the same single-element array.'
  );

  // test 3: array with multiple elements
  console.assert(
    JSON.stringify(bubbleSort([4, 2, 5, 1, 3])) ===
      JSON.stringify([1, 2, 3, 4, 5]),
    'Test 3 Failed: Should return a sorted array from 1 to 5.'
  );

  // test 4: array with negative numbers
  console.assert(
    JSON.stringify(bubbleSort([-3, -1, -2, 0, 2])) ===
      JSON.stringify([-3, -2, -1, 0, 2]),
    'Test 4 Failed: Should sort negative numbers correctly.'
  );

  // test 5: array with duplicate elements
  console.assert(
    JSON.stringify(bubbleSort([3, 1, 2, 3, 1])) ===
      JSON.stringify([1, 1, 2, 3, 3]),
    'Test 5 Failed: Should handle duplicates correctly.'
  );

  // test 6: sorted array
  console.assert(
    JSON.stringify(bubbleSort([1, 2, 3, 4, 5])) ===
      JSON.stringify([1, 2, 3, 4, 5]),
    'Test 6 Failed: Should handle already sorted array.'
  );

  // test 7: reverse sorted array
  console.assert(
    JSON.stringify(bubbleSort([5, 4, 3, 2, 1])) ===
      JSON.stringify([1, 2, 3, 4, 5]),
    'Test 7 Failed: Should correctly reverse a sorted array.'
  );

  console.log('All tests passed!');
};

testBubbleSort();
