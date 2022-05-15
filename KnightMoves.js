function minKnightMoves(x, y) {
let q = [[0, 0]];
let steps = 0;
let visited = new Set();
visited.add(`${0}-${0}`);

    x = Math.abs(x);
    y = Math.abs(y);
    
let directions = [ [-2, 1], [-1, 2], [-1, -2], [-2, -1], [2, 1], [1, 2], [1, -2], [2, -1]];
    
while( q.length > 0 ) {
    let length = q.length;
    
    for( let i = 0; i < length; i++ ) {
        let [x1, y1] = q.shift();
            
            if (x1 === x && y1 === y) {
              return steps;
            }
            
          directions.map((direction) => {
                let [xd, yd] = direction
                xd += x1
                yd += y1 
//test code
            
                
                // lkimits board to top right quadrant and -2 allows one step out of that area
                if (!visited.has(`${xd}-${yd}`) && xd >=-2 && yd >=-2){
                
                q.push([xd,yd])
                
                visited.add(`${xd}-${yd}`)
                }
                
            })
          
        }
        steps++
        console.log(steps)
    }


    return steps; 
}

minKnightMoves(3,3)