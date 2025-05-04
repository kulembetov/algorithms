import { linearSearch } from './index';

describe('linearSearch', () => {
    it('should return the index of the target', () => {
        expect(linearSearch(1, [1, 2, 3, 4, 5])).toBe(0);
        expect(linearSearch('a', ['d', 'b', 'a', 'd', 'e'])).toBe(2);
    })

    it('should return -1 if the target is not found', () => {
        expect(linearSearch(1, [2, 3, 4, 5])).toBe(-1);
        
    })
})
