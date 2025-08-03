function insertArray(arr1, arr2, position) {
    const result = [
        ...arr1.slice(0, position),
        ...arr2,
        ...arr1.slice(position)
    ];

    return result;
}
console.log(insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3));
console.log(insertArray(['a', 'b', 'e', 'f'], ['c', 'd'], 2));
