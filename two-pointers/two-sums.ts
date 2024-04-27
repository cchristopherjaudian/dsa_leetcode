const twoSums = (nums: number[], target: number) => {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    const curr = nums[i] + nums[j];
    if (curr === target) {
      return [i, j];
    }

    if (curr > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
};

console.log('twoSums', twoSums([1, 2, 4, 8, 9, 14, 15], 13));
