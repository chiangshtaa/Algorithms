function isSiStebbinsStack(deck) {
  let obj = {
    'A': 1,
    'J': 11,
    'Q': 12,
    'K': 13
  }
  let arr = deck.split(' ');
  arr = arr.map((card) => {
    let suit = card[card.length - 1];
    let num = obj[card.slice(0, -1)] ? obj[card.slice(0, -1)] : card.slice(0, -1);
    return [Number(num), suit];
  })
  let suits = ['C', 'H', 'S', 'D'];
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let next = arr[i + 1];
    let currSuit = suits.indexOf(curr[1]);
    let nextSuit = suits.indexOf(next[1]);
    if ((curr[0] + 3) % 13 !== next[0] % 13 || (currSuit + 1) % 4 !== nextSuit) {
      return i + 2;
    }
  }
  return 1;
}
