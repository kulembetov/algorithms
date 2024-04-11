// time complexity: O(n^2), due to nested operations within the array
// space complexity: O(1), as it's an in-place sorting method with no additional significant storage required

// the algorithm builds the sorted array one element at a time by inserting each new element into its proper place
// the first element is considered sorted, and with each pass, one new element is integrated into the sorted section

// it starts with assuming that the first element is sorted, and then it integrates each subsequent element into this sorted section in the correct position

// the outer loop iterates over the array starting from the second element, treating it as the element to be integrated
// the inner loop moves elements that are greater than the element to be integrated, making space for its insertion

// incrementally constructs a sorted array by placing each new element in its correct position within the sorted subset
export const insertionSort = (arr: number[]): number[] => {
  const n = arr.length;

  // iterate over the array starting from the second element
  for (let i = 1; i < n; i++) {
    // this is the element to be integrated into the sorted section
    let candidate = arr[i];
    // begin comparing from the end of the current sorted section
    let positionToInsert = i - 1;

    // shift elements that are greater than the candidate rightwards
    while (positionToInsert >= 0 && arr[positionToInsert] > candidate) {
      arr[positionToInsert + 1] = arr[positionToInsert];
      // move left through the sorted section
      positionToInsert--;
    }

    // insert the candidate into the correct position within the sorted section
    arr[positionToInsert + 1] = candidate;
  }

  return arr;
};
