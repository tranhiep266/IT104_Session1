const sumArrays = (...arrays) => {
    return arrays.map(arr => arr.reduce((acc, curr) => acc + curr, 0));
};
console.log(sumArrays([1, 2], [6, 7, 8], [12, 8]));
