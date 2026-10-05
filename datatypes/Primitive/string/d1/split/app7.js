function compareAppendExtend(ba1, ba2, itM) {
    ba1.push(itM);
    ba2.push(...itM);
    return [ba1, ba2];
}

console.log(compareAppendExtend([1, 2], [1, 2], [3, 4]));