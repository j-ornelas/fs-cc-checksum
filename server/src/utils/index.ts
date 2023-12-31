/*
  slightly modified from https://gist.github.com/ShirtlessKirk/2134376

  Modified above to return false if any non-integer values are in the string.
  Implementing luhn's algo on my own likely would have eaten up at least half 
  of my 3-hour time limit for this demo, hopefully using this is not an issue!
*/

export const luhn = (function (arr) {
  return function (ccNum: string) {
    const numsOnly = ccNum.replace(/\D/g, '');
    if (numsOnly.length !== ccNum.length) return false;
    let len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
