const tasks = [
  { title: "Task A", done: false },
  { title: "Task B", done: false },
];

tasks.forEach(function (task) {
  task.done = true;
  console.log(`${task.title}- ${task.done ? "✓" : "✗"}`);
});
