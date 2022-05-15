function rotLeft(a, d) {
    while(d--){
        a.push(a.shift());
    }
    return a;
}
rotLeft([1,2,3,4,5], 4)