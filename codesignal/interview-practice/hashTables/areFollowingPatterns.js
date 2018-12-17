function areFollowingPatterns(strings, patterns) {
  let stringKey = {};
  let patternsKey = {};
  for (let i = 0; i < strings.length; i++) {
    let str = strings[i];
    let pat = patterns[i];
    
    if (stringKey[str] && stringKey[str] !== pat) {
      return false;
    }
    if (patternsKey[pat] && patternsKey[pat] !== str) {
      return false;
    }
    
    stringKey[str] = pat;
    patternsKey[pat] = str;
  }
  return true;
}
