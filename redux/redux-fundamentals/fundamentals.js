// from https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree

// 1. Everything that changes in your application is contained in a single object called State

// to change state must dispacth an Action

// Action is a plain JavaScript object describing the change
// must contain a type: key which is not undefined

// 2. State is read only can only be changed by Actions

// Actions must be created by pure functions - Action Creators
// e.g. database calls cannot be pure.

// 3. To describe state mutations write a pure function that takes previous state and Action and returns next State -- This is a REDUCER.


