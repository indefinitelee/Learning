Why do we use Node?
Node is about 50/50 JS/C++
Well the JS engine, V8 is about 30%/70% JS/C++ and libuv is 100% C++ 

Node gives us an interface between our JS application and the C++ that interprets and executes our JS code. 

Node also gives us nice wrappers and a consistent API for modules such as HTTP, FS, Crypto, and Path, which is implemented in libuv.
(./Node.png)

github.com/nodejs/node

lib - JS definitions of functions we import
src - C++ implementations of those functions

const {
  PBKDF2
} = process.binding('crypto'); // process.binding is how Node joins the C++ side to JS side of the project
(./Process_binding.png)

In src/node_crypto.cc:
 env->SetMethod(target, "PBKDF2", PBKDF2); // takes PBKDF2 function from C++ and exports it

 contains JS definitions of types such as integers, undefined, etc.

Vid 5
 ##Threads## 
Each program begins a -process- a process is an instance of a computer program that is being executed. 

Processes can have multiple #threads# in essense, a to do list of operations to conduct, carried out in order. 

#Scheduling# 
in threads is important. The OS Scheduler is how the computer decides which thread to process at any given instant. So we can work on each but don't have to wait too long for any of them. 

Two methods which help process more threads and are relevant to NodeJS are:
1 additional CPU cores (though technically multi-threading means a core can process more than one thread)
2 More efficiently analyse the work being done by each thread. 

For example, during I/O activities such as reading a file from a drive, the OS Scheduler can execute an operation on another thread and then return to the I/O process. 

Vid 6

s
