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