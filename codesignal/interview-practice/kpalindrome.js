function kpalindrome(s, k) {
  const traverse = function(string, remaining) {
    if (remaining < 0) {
      return false;
    }
    
    for (let i = 0; i < string.length; i++) {
      let start = string[i];
      let end = string[string.length - 1 - i];
      if (start !== end) {
        let s1 = string.slice().split('');
        let s2 = string.slice().split('');
        s1.splice(i, 1);
        s2.splice(string.length - 1 - i, 1);
        s1 = s1.join('');
        s2 = s2.join('');
        return traverse(s1, remaining - 1) || traverse(s2, remaining - 1);
      }
    }
    return true;
  }
  
  return traverse(s, k);
}
