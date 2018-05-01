// fake node to mimic JS event loop code

// node myFile.js

myfile.runContents(); // once executed we enter node js event loop

function shouldContinue() {

}
// entire body executes in one 'tick';
while(shouldContinue()) {

}



// exit back to terminal