// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if (num === 1) return num
    return num *= factorial(num-1)
   
}

factorial(4)