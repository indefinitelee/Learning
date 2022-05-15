var numIslands = function(grid) {
  if (!grid) return 0;
  let islands = 0
  const rows = grid.length
  const cols = grid[0].length
  let visited = new Set()
  const dirs = [[0,1],[0,-1],[-1,0],[1,0]];
  
  for (let r=0; r< rows; r++) {
    for (let c=0; c< cols; c++) {
      let cur = `${r},${c}`
      let cell = grid[r][c]
      if (cell ==="1" && !visited.has(cur)){
      
        bfs(r, c)
        islands++
      }
      }
    }
  
  function bfs(r, c) {
    let q = [];
    visited.add(`${r},${c}`)
    q.push([r,c])
    
    while (q.length >0) {
      const [row, col] = q.shift()
       for(const dir of dirs) {
        const [dr,dc] = dir;
           r = row+dr
          c = col + dc 
           
        if (r >=0 && r < rows && 
            c >=0 && c < cols &&
            grid[r][c] ==="1" &&
            !visited.has(`${r},${c}`)) {
          q.push([r,c])
         
          visited.add(`${r},${c}`)
        }
      }
      
    }
    
  }

  return islands;
};

let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid))//3