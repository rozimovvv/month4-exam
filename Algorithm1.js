function mergeStrings(word1, word2) {
  let result = "";
  let length = Math.max(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }

  return result;
}

console.log(mergeStrings("ab", "qwer"));
