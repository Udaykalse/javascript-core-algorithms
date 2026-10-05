function addRange(lst, st, end) {
    for (let i = st; i < end; i++) {
        lst.push(i);
    }
    return lst;
}
console.log(addRange([0], 1, 5));