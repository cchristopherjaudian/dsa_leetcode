const reverseString = (s: string[]) => {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    const temp = s[i];

    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  return s;
};

console.log('reverseString', reverseString(['h', 'e', 'l', 'l', 'o']));
