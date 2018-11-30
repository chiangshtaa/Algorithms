function equitableMeetup(friendsRoutes) {
  // pointers for each friend
  let houses = new Array(friendsRoutes.length).fill(1);
  
  // total amount of candy for each friend
  let totals = friendsRoutes.map((route) => route[0]);
  
  let best = houses.slice();  
  let bestSpread = Math.max(...totals) - Math.min(...totals);
  
  while (true) {
    let min = -1;
    // find friend w/ least candy
    for (let i = 0; i < friendsRoutes.length; i++) {
      if (houses[i] < friendsRoutes[i].length && (min === - 1 || totals[i] < totals[min])) {
        min = i;
      }
    }
    
    if (min === -1) {
      break;
    }
    
    // increment lowest (visit another house)
    totals[min] += friendsRoutes[min][houses[min]];
    houses[min]++;
    
    // recalculate spread
    let spread = Math.max(...totals) - Math.min(...totals);
    
    if (spread < bestSpread) {
      best = houses.slice();
      bestSpread = spread;
    }
  }
  return best;
}
