const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        const spliced = numbers.splice(i, 1);
        numbers.splice(j, 0, spliced);
      }
    }
  }

  return numbers;
};

const testNumbers = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(insertionSort(testNumbers.join(', ')));
