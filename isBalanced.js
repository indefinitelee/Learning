/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    console.log(s)
    if (!s || s.length<= 1) {
        return "NO"
    }
    // Write your code here
    //stack is last in first out so we push on and pop off
    let stack = []
    let openers = ['{', '(', '[']
    let closers = ['}', ')', ']']
    for (let char of s) {
        if(openers.includes(char)){
            stack.push(char)
        }
        if(closers.includes(char)) {
            let matchIndex = closers.indexOf(char)
            let matcher = openers[matchIndex]
            if(matcher === stack[stack.length -1]){
                stack.pop()
            } else {
                return "NO"
            }
        }
        
    }
    if (stack.length) {
        return 'NO';
    }
    return "YES";
    

}