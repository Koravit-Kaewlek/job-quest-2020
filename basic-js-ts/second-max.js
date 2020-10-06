function secondMax(arr = []) {
  let arrDistinct = [];
  if (arr.length < 1) return 'Error!';

  arr.forEach((item) => {
    if (arrDistinct.indexOf(item) === -1) {
      arrDistinct.push(item);
    }
  });
  const arrSortDesc = arrDistinct.sort((a, b) => {
    return b - a;
  });

  if (arrSortDesc.length === 1) return arrSortDesc[0];
  return arrSortDesc[1];
}
console.log(secondMax([2, 3, 4, 5]));
console.log(secondMax([9, 2, 21, 21]));
console.log(secondMax([4, 4, 4, 4]));
console.log(secondMax([4123]));
console.log(secondMax([]));
