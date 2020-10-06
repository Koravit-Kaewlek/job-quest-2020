function fib(num) {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}
console.log('----- Ex.1 Fibonacci Sequence -----');
console.log(fib(1));
console.log(fib(3));
console.log(fib(12));
