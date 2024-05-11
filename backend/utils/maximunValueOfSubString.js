const maximunValueOfSubString = function (t) {
  let maxF = 0;
  const n = t.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const substring = t.substring(i, j);
      const occurrences = countOccurrences(t, substring);
      const f = substring.length * occurrences;
      maxF = Math.max(maxF, f);
    }
  }

  return maxF;
};

function countOccurrences(mainString, subString) {
  let count = 0;
  let lastIndex = -1;

  while ((lastIndex = mainString.indexOf(subString, lastIndex + 1)) !== -1) {
    count++;
  }

  return count;
}

module.exports = maximunValueOfSubString;
