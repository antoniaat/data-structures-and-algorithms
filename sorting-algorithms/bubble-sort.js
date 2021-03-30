const bubbleSort = (nums) => {
  let swapped = false;

  do {
    swapped = false;

    for (let index = 0; index < nums.length; index++) {
      const currentNum = nums[index];
      const nextNum = nums[index + 1];

      if (currentNum > nextNum) {
        nums[index] = nextNum;
        nums[index + 1] = currentNum;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
};

const almostSortedNumbers = [5, 6, 7, 8, 1, 3, 3];
console.log(bubbleSort(almostSortedNumbers.join(', ')));
