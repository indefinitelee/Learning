The first principle of Redux is whether your app is a really simple one like this counter example, or a complex application with a lot of UI, and change of state, you are going to represent the whole state of your application as a single JavaScript object.

All mutations, and changes the state in Redux are explicit. It is possible to keep track of all of them. In this case, I am logging every state change in the application in the console. You can see that, in the counter example, there isn't really much state to keep track of so it can be represented by a JavaScript number.

<<<<<<< HEAD
![Numbers Showing State][]
=======
![Numbers Showing State](https://github.com/indefinitelee/Learning/blob/master/redux/Images/NumbersShowingState.png)
>>>>>>> b480a455b39614e12885c13b493ca6c0c9e5683e

Here is a different example, a list of independent counters that I can add and remove. In this case, a single number is not enough to represent the state of the application, so we use an array of JavaScript numbers. In a more complex application, there is more state to keep track of.

![Multiple Counter State](https://github.com/indefinitelee/Learning/blob/master/redux/Images/MultipleCounterState.png)

This is a typical todo app, where I can add todos, I can cross them as completed ones, and I can change their current filter. Looking back at the history of the state changes, we can see that the initial state of the app was a JavaScript object, containing an array under the todo string, and a string seen show all, under visible filter.

![ToDo App State](https://github.com/indefinitelee/Learning/blob/master/redux/Images/ToDoAppState.png)

When I added the first todo, it was added to the todos array, inside our state object. The todo itself, is described by a plain child script object, saying it was not completed, and the text was saved. Every further change that the app, whether when I was crossing out the todos, or when I changed the visibility filter, resulted in this change to this state object, described in our whole application.

Now you know the first principle of Redux, which is that, everything that changes in your application, including the data and the UI state, is contained in a single object, we call the state or the state tree.


Vid 2

The second principle of Redux is that the state tree is read only. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action.

An action is a plain JavaScript object describing the change. Just like the state is the minimal representation of the data in your app, the action is the minimal representation of the change to that data.

Describing Actions

The structure of the action object is up to you. The only requirement is that it has a type property, which is not undefined. We suggest using strings, because they are serializable.

In different apps, you're going to have different types of actions. For example, in a counter app we only have INCREMENT and DECREMENT actions. We don't pass any additional information, because this is all that is needed to describe these changes.

But say, for a counter list example, we have more actions. We have ADD_COUNTER action, we have a REMOVE_COUNTER action, and anytime I change the individual counter, you can see that the INCREMENT and the DECREMENT actions now have index. Because we need to describe which particular counter was changed.

Multiple Actions

This approach scales well to medium and complex applications. Anytime I add a todo, the components don't really know how exactly it's been added. All they know is that they need to dispatch an action with a type, ADD_COUNTER, and the text of the todo and a sequential id.

If I toggle a todo, again, the components don't know how it happens. All they need to do is to dispatch an action with a type, TOGGLE_TODO and pass in the id of the todo I want to toggle.

Complex Example

The same is true for the visibilityFilter. Anytime I click on this control to change the currently visible todos, what really happens is this component dispatches an action with a type, SET_VISIBILITY_FILTER, and pass in the desired filter string, filter field.

But these are all plain objects, describing what happens in a app.

Now you know the second principle of Redux -- the state is read only. The only way to change the state tree is by dispatching an action. An action is a plain JavaScript object, describing in the minimal way what changed in the application. Whether it is initiated by a network request or by user interaction, any data that gets into the Redux application gets there by actions.
