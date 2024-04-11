// time complexity: O(n log n), as the array is repeatedly halved and each layer requires a linear merge
// space complexity: O(n), as additional space is needed for the temporary arrays during the merge process

// the algorithm splits the array into smaller arrays until each sub-array contains a single element
// then merges those arrays in a manner that results in a new sorted array

// this division into halves is repeated, reducing the size of the array being sorted with each recursive call
// merging is the fundamental operation of this algorithm, combining two sorted arrays into one

// each split reduces the problem size by half, leading to the log n component of the time complexity
// the merge operation, which involves comparisons and array appends, accounts for the linear component

export const mergeSort = (arr: number[]): number[] => {
  // if the array is 1 or 0 elements long, it is considered sorted
  if (arr.length <= 1) return arr;

  // find the middle point to divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  // recursively sort the first half of the array
  const left = mergeSort(arr.slice(0, middle));
  // recursively sort the second half of the array
  const right = mergeSort(arr.slice(middle));

  // merge the two sorted halves into a single sorted array
  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  let sortedArr: number[] = [];
  let i = 0;
  let j = 0;

  // iterate over both halves to merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
  }

  // append any remaining elements from the left array
  while (i < left.length) {
    sortedArr.push(left[i]);
    i++;
  }

  // append any remaining elements from the right array
  while (j < right.length) {
    sortedArr.push(right[j]);
    j++;
  }

  return sortedArr;
};
