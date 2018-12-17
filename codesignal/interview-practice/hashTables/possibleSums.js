// function possibleSums(coins, quantity, sum, set) {
//     set = set === undefined ? new Set() : set;
//     sum = sum === undefined ? 0 : sum;
    
//     for (let i = 0; i <= quantity[0]; i++) {
//         set.add(sum);
//         if (quantity.length > 1) {
//             possibleSums(coins.slice(1), quantity.slice(1), sum, set);
//         }
//         sum += coins[0];
//     }
//     return set.size - 1;
// }
// 

function possibleSums(coins, quantity) {
    var map = {0 : 1};
    
    for (let i = 0; i < coins.length; i++) {
        for (let sum in map) {
            for (let j = 1; j <= quantity[i]; j++) {
                map[parseInt(sum) + coins[i] * j] = 1;
            }
        }
    }
    return Object.keys(map).length - 1;
}