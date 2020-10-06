const arr = ['', 'Fizz', 'Buzz', 'FizzBuzz'];
function fizzBuzz(num) {
  const is3 = num % 3 == 0 ? 'Fizz' : '';
  const is5 = num % 5 == 0 ? 'Buzz' : '';
  return is3 + is5;
}

console.log(fizzBuzz(21));
console.log(fizzBuzz(18));
console.log(fizzBuzz(45));
