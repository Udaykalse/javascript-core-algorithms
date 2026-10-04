const fibonacci = (n) => {
    const series = [0, 1];
    for(let i = 2; i < n; i++) series.push(series[i - 1] + series[i - 2]);
    return series.slice(0, n)
}

console.log(fibonacci(8))