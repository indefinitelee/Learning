const  sumExcept= (input) =>{
  let product = 1;
  let result = [];
  let left = [];
  let right = [];

  left[0] = 1;
  for (let i=1; i<input.length; i++) {
    left[i] = input[i-1] * left[i-1];
  }

  right[input.length-1] = 1;
  for (let i=input.length-2; i>=0; i--) {
    right[i] = input[i+1] * right[i+1];
  }

  for (let i=0; i<input.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}


let data = [1,2,3,4];
let data2 = [1,2,4,8,16];

sumExcept(data2);