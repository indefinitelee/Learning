// from https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree

// 1. Everything that changes in your application is contained in a single object called State

// to change state must dispacth an Action

// Action is a plain JavaScript object describing the change
// must contain a type: key which is not undefined

// 2. State is read only can only be changed by Actions

// Actions must be created by pure functions - Action Creators
// e.g. database calls cannot be pure.

// 3. To describe state mutations write a pure function that takes previous state and Action and returns next State -- This is a REDUCER.

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0; // If state is undefined, return the initial application state
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state; // In case an action is passed in we don't understand
  }
}

expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

expect(counter(2, { type: 'DECREMENT' })).toEqual(1);

expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

expect(counter(1, { type: 'SOMETHING_ELSE' })).toEqual(1);
