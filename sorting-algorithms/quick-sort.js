const quickSort = (numbers) => {
  if (numbers.length <= 1) return numbers;

  const pivot = numbers[numbers.length - 1];
  const smallerNumbers = [];
  const biggerNumbers = [];

  for (let index = 0; index < numbers.length - 1; index++) {
    const currentNumber = numbers[index];

    if (currentNumber < pivot) {
      smallerNumbers.push(currentNumber);
    } else {
      biggerNumbers.push(currentNumber);
    }
  }

  return [...quickSort(smallerNumbers), pivot, ...quickSort(biggerNumbers)];
};

const testNumbers = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(quickSort(testNumbers));
