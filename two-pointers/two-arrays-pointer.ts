const twoArrayPointers = (arr1: number[], arr2: number[]) => {
  let i = 0,
    j = 0;

  const ans: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    ans.push(arr2[j]);

    j++;
  }

  return ans;
};

console.log('twoArrayPointers', twoArrayPointers([1, 4, 7, 20], [3, 5, 6]));
