async function runPromisesInSeries(promiseTask) {
  const results = [];
  for (const task of promiseTask) {
    const res = await task();
    results.push(res);
  }
  return results;
}

const createAsyncJob = (id, delay) => () =>
  new Promise((res) => setTimeout(() => res(`Task ${id} done`), delay));

const task = [createAsyncJob(1, 100), createAsyncJob(2, 50)];

runPromisesInSeries(task).then(console.log);
