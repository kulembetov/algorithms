import { slidingWindow } from './index';

describe('slidingWindow', () => {
    it('should return the correct result', () => {
        const result = slidingWindow([1, 2, 3, 4, 5], 3, (window) => window.reduce((a, b) => a + b, 0));
        expect(result).toEqual([6, 9, 12]);
    });

    it('should throw an error if the window size is invalid', () => {
        expect(() => slidingWindow([1, 2, 3, 4, 5], 0, (window) => window.reduce((a, b) => a + b, 0))).toThrow(
            'Invalid window size'
        );
    });

    it('should throw an error if the window size is greater than the array length', () => {
        expect(() => slidingWindow([1, 2, 3, 4, 5], 6, (window) => window.reduce((a, b) => a + b, 0))).toThrow(
            'Invalid window size'
        );
    });
});
