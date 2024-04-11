// time complexity: O(n log n), as the array is repeatedly partitioned around a pivot
// space complexity: O(log n), due to recursive calls on the stack

// the algorithm chooses a pivot element and partitions the array into two halves around the pivot,
// such that elements less than pivot are on the left, and elements greater are on the right

// this division process is repeated recursively for each half, reducing the size of the array being sorted with each recursive call
// partitioning is the fundamental operation of this algorithm, segmenting the array to sort smaller arrays independently

// each partition reduces the problem size on average by half
// the partition operation, which involves comparisons and swaps, is key to ensuring elements are moved to their correct positions

export const quickSort = (
  arr: number[],
  low: number = 0,
  high: number = arr.length - 1
): number[] => {
  // if the current segment of the array contains more than one element, it needs sorting
  if (low < high) {
    // partition the array and get the pivot index
    let pi = partition(arr, low, high);

    // recursively apply quickSort to the left of the pivot
    quickSort(arr, low, pi - 1);
    // recursively apply quickSort to the right of the pivot
    quickSort(arr, pi + 1, high);
  }
  return arr;
};

const partition = (arr: number[], low: number, high: number): number => {
  // the pivot is chosen to be the element at the high index
  let pivot = arr[high];
  // index of the smaller element
  let i = low - 1;
  // iterate over each element of the array to rearrange them around the pivot
  for (let j = low; j < high; j++) {
    // if current element is smaller than or equal to pivot, swap it to the front
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  // place the pivot element after the last smaller element
  swap(arr, i + 1, high);
  // return the pivot index
  return i + 1;
};

const swap = (arr: number[], i: number, j: number) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
