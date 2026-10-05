function appendTupItM(lst, tpl) {
    lst.push(...tpl);
    return lst;
}

console.log(appendTupItM([10, 20], [30, 40]));