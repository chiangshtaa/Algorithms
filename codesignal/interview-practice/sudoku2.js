function sudoku2(grid) {
    let combinations = [];
    // get rows
    combinations = combinations.concat(grid);
    // get 3x3 regions
    for (let i = 0; i < grid.length; i+=3) {
        for (let n = 0; n < grid.length; n+=3) {
            let regions  = [];
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    regions.push(grid[i + j][n + k]);
                }
            }
            combinations.push(regions);
        }
    }
    // get columns
    for (let i = 0; i < grid.length; i++) {
        let column = [];
        for (let m = 0; m < grid.length; m++) {
            column.push(grid[m][i]);
        }
        combinations.push(column);
    }
    // filter out '.'
    for (let i = 0; i < combinations.length; i++) {
        combinations[i] = combinations[i].filter((element) => element !== '.');
    }
    // check if any dupes
    for (let i = 0; i < combinations.length; i++) {
        if (!hasNoDuplicates(combinations[i])) {
            return false;
        }
    }
    return true;
}

function hasNoDuplicates(array) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < array.length; i++) {
        let index = numbers.indexOf(Number(array[i]));
        if (index !== -1) {
            numbers[index] = false;
        } else {
            return false;
        }
    }
    return true;
}