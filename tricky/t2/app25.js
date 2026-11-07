function sum(a, b, c) {
  console.log(a + b + c + this.extra);
}

const ctx = { extra: 10 };
sum.call(ctx, 1, 2, 3);
