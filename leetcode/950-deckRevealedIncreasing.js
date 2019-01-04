var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);
  let queue = [];
  let result = new Array(deck.length);
  for (let i = 0; i < deck.length; i++) {
    queue.push(i);
  }
  
  for (let i = 0; i < deck.length; i++) {
    result[queue.shift()] = deck[i];
    queue.push(queue.shift());
  }
  return result;
};