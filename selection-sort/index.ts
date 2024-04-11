// time complexity: O(n^2), due to nested operations within the array
// space complexity: O(1), as it's an in-place sorting method with no additional significant storage required

// consistently finds the smallest (or largest) remaining element in the unsorted section and places it at the end of the sorted section
// it doesn't consider the order within the already sorted section because it's strictly placing the next smallest or largest value at the next position

// sorts an array by repeatedly finding the minimum element from the unsorted part and putting it at the beginning
export const selectionSort = (arr: number[]): number[] => {
  const n = arr.length;

  // iterate over the array up to the second to last element
  // already in place, no need to compare
  for (let i = 0; i < n - 1; i++) {
    // start with the assumption that the first element of the unsorted section is the smallest
    let minIndex = i;

    // compare the assumed minimum with the rest of the array
    for (let j = i + 1; j < n; j++) {
      // find the actual minimum element in the unsorted part
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
