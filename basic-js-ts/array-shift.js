function shift(arr = [], direction, num) {
  const len = arr.length;
  let result = [];
  switch (direction) {
    case 'left':
      const left = arr.splice(0, num % len);
      result = [...arr, ...left];
      break;
    case 'right':
      const right = arr.splice(len - (num % len), len);
      result = [...right, ...arr];
      break;
    default:
      result;
  }

  return result;
}
console.log('----- Ex.2 Array Shift -----');
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5], 'right', 3));
