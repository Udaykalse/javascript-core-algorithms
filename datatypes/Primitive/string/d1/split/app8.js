function addTask(queue, newTask) {
    queue.push(...newTask);
    return queue;
}

console.log(addTask(["task1"], ["task2", "task3"]));