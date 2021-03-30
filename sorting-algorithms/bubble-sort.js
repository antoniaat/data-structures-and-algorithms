const bubbleSort = (nums) => {
  const sortedNums = nums;
  let swapped = false;

  do {
    swapped = false;

    for (let index = 0; index < nums.length; index++) {
      const currentNum = nums[index];
      const nextNum = nums[index + 1];

      if (currentNum > nextNum) {
        sortedNums[index] = nextNum;
        sortedNums[index + 1] = currentNum;
        swapped = true;
      }
    }
  } while (swapped);

  return sortedNums;
};

const testNumbers = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
const almostSorterNumbers = [5, 6, 7, 8, 1, 3, 3];
console.log(bubbleSort(almostSorterNumbers.join(', ')));
