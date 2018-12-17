function containsCloseNums(nums, k) {
    let hash = [];
    for (let i = 0; i < nums.length; i++) {
        hash.push([nums[i], i]);
    }
    hash.sort((a, b) => {
        return a[0] - b[0];
    })
    for (let j = 1; j < hash.length; j++) {
        if (hash[j - 1][0] === hash[j][0]) {
            if (Math.abs(hash[j - 1][1] - hash[j][1]) <= k) {
                return true;
            }
        }
    }
    return false;
}

// Time limit exceed on test 24
// function containsCloseNums(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j <= k; j++) {
//             if (nums[i] === nums[i + j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
