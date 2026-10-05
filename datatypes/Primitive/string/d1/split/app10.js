function flatten(mat) {
    let flat = [];
    for (let row of mat) {
        flat.push(...row);
    }
    return flat;
}

console.log(flatten([[1, 2], [3, 4], [5]]));