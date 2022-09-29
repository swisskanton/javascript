function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
            if (parseInt(grid[i][j]) > parseInt(grid[i - 1][j]) && parseInt(grid[i][j]) > parseInt(grid[i + 1][j]) && parseInt(grid[i][j]) > parseInt(grid[i][j - 1]) && parseInt(grid[i][j]) > parseInt(grid[i][j + 1]))    
                grid[i] = grid[i].slice(0, j) + 'X' + grid[i].slice(j + 1)
        }        
    }
    return grid
}

console.log("['989', '1X1', '111'] -> ", cavityMap(['989', '191', '111']))
console.log("['1112', '1X12', '18X2', '1234'] -> ", cavityMap(['1112', '1912', '1892', '1234']))