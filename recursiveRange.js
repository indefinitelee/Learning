function recursiveRange(n){
    let sum= 0
    if (n >0) {
        console.log(typeof n)
        return sum+ recursiveRange(n-1)
    }
   
}

recursiveRange(6)