export const linearSearch = <T>(target: T, array: T[]) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}