// time complexity: O(n), where n is the size of the array
// space complexity: O(1), constant extra space

// is a technique for finding subarrays in an array that satisfy a specific condition
// it maintains a "window" that expands based on specific criteria
// this allows for solving problems that would otherwise require nested loops in just a single pass

export const slidingWindow = <T, R>(arr: T[], size: number, fn: (window: T[]) => R): R[] => {
    if (size <= 0 || size > arr.length) {
        throw new Error('Invalid window size');
    }

    const result: R[] = [];

    for (let i = 0; i <= arr.length - size; i++) {
        const window = arr.slice(i, i + size);
        result.push(fn(window));
    }

    return result;
};