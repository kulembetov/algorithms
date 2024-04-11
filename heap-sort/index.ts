// time complexity: O(n log n), as elements are repeatedly organized into a heap structure
// space complexity: O(1), as the sort is performed in-place without needing additional significant storage

// the algorithm visualizes the array as a binary tree and constructs a max heap,
// where each parent node is greater than its child nodes
// this heap construction ensures that the largest element is at the root of the heap

// the root of the heap is then swapped with the last item of the heap, reducing the heap size by one,
// and the heap property is restored to continue sorting
// this process of building the heap, swapping, and re-heapifying is repeated until the array is sorted

export const heapSort = (arr: number[]): number[] => {
  const n = arr.length;

  // build a max heap from the array
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // swap current root to the end
    swap(arr, 0, i);
    // re-heapify the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
};

function heapify(arr: number[], n: number, i: number) {
  // initialize largest as root
  let largest = i;
  // left child index
  const left = 2 * i + 1;
  // right child index
  const right = 2 * i + 2;

  // if the left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // if the right child is larger than the largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // if the largest is not root
  if (largest !== i) {
    // swap the elements
    swap(arr, i, largest);
    // recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
