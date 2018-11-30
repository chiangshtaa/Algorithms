function wailingGhosts(sounds) {
  if (sounds[0] === 'u') {
    return false;
  }
  let count = 0;
  let start = true;
  for (let i = 0; i < sounds.length; i++) {
    let sound = sounds[i];
    if (sound === 'o' && start) {
      count++;
    } else if (sound === 'u' && count !== 0) {
      start = false;
    } else if (sound === 'o' && !start && count > 0) {
      count--;
      if (count === 0) {
        start = true;
      }
    } else {
      return false;
    }
  }
  return count === 0;
}
