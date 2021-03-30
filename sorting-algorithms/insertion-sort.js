const insertionSort = (numbers) => {
  const sortedNumbers = numbers;

  for (let i = 1; i < sortedNumbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortedNumbers[i] < sortedNumbers[j]) {
        const spliced = sortedNumbers.splice(i, 1);
        sortedNumbers.splice(j, 0, spliced);
      }
    }
  }

  return sortedNumbers;
};

const testNumbers = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const almostSorterNumbers = [5, 6, 7, 8, 1, 3, 3];
console.log(insertionSort(testNumbers.join(', ')));
