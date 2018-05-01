// fake node to mimic JS event loop code

// node myFile.js

// pretend arrays to keep track of tasks
const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// new timers, tasks, operations are recorded from myFile running
myfile.runContents(); // once executed we enter node js event loop

// how Node decides if event loop should process next tick
function shouldContinue() {
	// Check one: any pending setTimeout, setInterval, or setImmediate? 
	// Check two: any pending OS tasks, e.g. an http server listening to a port
	// Check three: any long running operations e.g. a  call to fs to read a file off HD

	return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}
// entire body executes in one 'tick';
while(shouldContinue()) {

}



// exit back to terminal