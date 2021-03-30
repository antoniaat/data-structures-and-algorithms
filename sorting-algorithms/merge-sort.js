const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
};

const mergeSort = (numbers) => {
  const { length } = numbers;

  if (length < 2) return numbers;

  const middle = Math.floor(length / 2);
  const left = numbers.slice(0, middle);
  const right = numbers.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const result = merge(sortedLeft, sortedRight);

  return result;
};

const testNumbers = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log('final result ', mergeSort(testNumbers));
