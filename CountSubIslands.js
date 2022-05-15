function countSubIslands(grid1, grid2) {
// are islands in grid2 incompassed by an island in grid1
    // simultaneous dfs on each and compare cells
    // for each "1" in grid 2 see if same coords are in grid 1
    let visited = new Set()
    let rows = grid1.length
    let cols = grid1[0].length
    let count = 0
    function dfs(r, c) {
        let result = true
        if (r < 0 || c < 0 || r > rows || c > cols || grid2[r][c] === 0 || visited.has(`${r}${c}`) ) {
            return true
        }
        visited.add(`${r}${c}`)
        
        if (grid1[r][c] === 0) {
            result = false
        }

       res = dfs(r-1, c) && res
        res = dfs(r+1, c) && res
        res= dfs(r, c-1) && res
        res = dfs(r, c+1) && res

        return result

        
    }

        for (let r = 0; r< rows; r++){
            for (let c=0; c<cols; c++) {
                if (grid2[r][c] === 1 && !visited.has(`${r}${c}`) && dfs(r,c) ){
                    count++
                }
            }
        }
        return count
    
}