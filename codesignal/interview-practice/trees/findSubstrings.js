function findSubstrings(words, parts) {
  var finds = {};
  for (var i = 0; i < parts.length; i++) {
    finds[parts[i]] = parts[i].length;
  }
  for (var i = 0; i < words.length; i++) {
    var length;
    var word = words[i];
    for (var j = word.length; j > 0; j--) {
      var index = 0;
      while (index + j <= word.length) {
        var subStr = word.slice(index, j + index);
        if (finds[subStr] > 0) {
          j = 0;
          words[i] = words[i].replace(subStr, "[" + subStr + "]");
          break;
        }
        index++
      }
    }
  }
   return words;
}