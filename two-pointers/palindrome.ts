const isPalindrome = (str: string): boolean => {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) return false;

    i++;
    j--;
  }

  return true;
};

// success scenario
console.log('result', isPalindrome('racecar'));

// fail scenario
console.log('result', isPalindrome('racecarxxx'));
