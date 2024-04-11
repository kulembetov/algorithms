// time complexity: O(n^2), due to nested loops that each run nearly n times
// space complexity: O(1), as it's an in-place sorting method with no additional significant storage required

// during the first pass (i = 0), the largest element is moved to the last position
// each subsequent pass pushes the next largest element to its final position
// hence, with each pass (i), fewer elements need checking

// the outer loop controls the number of passes: n-1 passes are needed for n elements (as the last elements are already sorted)
// the inner loop range reduces with each pass, avoiding already sorted elements at the end of the array

// repeatedly step through the list, compare adjacent elements and swap if in wrong order
export const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
