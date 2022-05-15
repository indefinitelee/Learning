let list = ["cat", "baby", "ax", "farm", "taco"]

let word1 = "dsdfcata"
let word2 ="bdgbkykya"
let word3 = "kdhfkmram"

function findWord(list, word) {
    let wordMap = {}
    
    
    for(const char of word){
        wordMap[char] = (wordMap[char]|| 0 ) +1 
    }

    for( const l of list) {
        let candidateMap ={}
        for (const letter of l) {
        candidateMap[letter] = (candidateMap[letter]|| 0 ) +1 
    }

    for(const wm in wordMap){
        if (wm in candidateMap) {
            candidateMap[wm] = candidateMap[wm] - wordMap[wm] 
        }
    }

    if(Object.values(candidateMap).every(item => item <= 0)){
        return l
    }
        
    }
    return null
        
}



console.log(findWord(list, word2))

