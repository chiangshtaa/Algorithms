function sleddingHillsExtreme(enjoyability, maxRuns) {
  let total = 0;
  let mod = Math.pow(10, 9) + 7;
  enjoyability.sort((a, b) => b - a);       // put the greatest values first
  enjoyability.push(0);                     // a guard element in case of only one given

  // essentially we're going to "shave off" layers, one layer at a time
  // - this is in case a layer has more than maxRuns remaining, we can take just maxRuns from it
  // - an alternative is to take a whole block of layers at a time
  
  let runsRemaining = maxRuns;
  for ( var i = 1; i < enjoyability.length && runsRemaining; i++ ) {  // we're going to make one pass through the sorted array
    while ( enjoyability[i-1] > enjoyability[i] ) {
      var runs = Math.min( i, runsRemaining );     // the layer stretches from the origin to 'i'
      total += enjoyability[i-1]-- * runs;   // the "--" operator guarantees the loop will terminate
      runsRemaining -= runs;      // this may become zero before the loop terminates, but then 'runs' will always be zero as well
    }
  }

  return total % mod;
}