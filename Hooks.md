## React Hooks 
### Whay are Hooks in React?

What is Hooks?
Hooks are a new addition in React 16.8
They let use state and other React features without writing a class. They

When will i use Hook?
If you write a functional component and find that you need to add a state to it,you previously had to convert it to a class. 
You can now use the Hook within the existing functional component. 

##### useState()
When we create a React application,we will need a way to store a state within our components - useState allows us to do this in the best way. 

* Store variables of the function.
* useState accept an initial state and returns 2 values:
   - The current value.
   - A function to update the state.

##### Basic actions
* Import.
* Init the state.
* Show the state value to the DOM.
* A function to update the state.

** state can be from any values: string,number,bollean.object,matrix,array etc..**

```js
// 1. import 
import React, {useState} from 'react';

function App(){
    // 2. Init state
    const [counter ,setCounter] = useState(0);
    
    return(
        <>
            {/* Show the state in the DO*/}
            <h2>You clicked {counter} times</h2>
            {/*4. Update the state*/}
            <button onClick={() =>
                 setCounter(counter +1)} 
                className="btn btn-primary">
                    Click
            </button>
        </>
    );
}
export default App;

```
#### 𝐮𝐬𝐞𝐄𝐟𝐟𝐞𝐜𝐭()
The Effect Hook allows you to perform side effects on function components:
Some examples of side effects are data retrieval, direct DOM update, and timers.

useEffect accepts two arguments.
* function
* Dependence (optional)

  * By default useEffect runs as componentDidMount () + componentDidUpdate () together.
But we can change the behavior by default and run the function only when certain values ​​have changed.
This is done by entering an array in the dependencies list in the second argument.

Simple timer in useEffect hook - will update the variable counter each second in 1:
* There is no calling for the function - runs automatically.
* *Without dependencies - runs on every render.
* With dependencies - runs only on the first render, and when the dependency changes.

```js
// 1. Import
import React,{useState,useEffect} from 'react';

function Timer(){
    // 2. define variable counter
    const [counter ,setCounter] = useState(0);
    
    // 3. Add side-effect - we do not call useEffect
    useEffect(() =>{
        setTimeOut(() =>{
            setCounter(counter +1);
        },1000);
    });

    return(
        <>
            <h2>Counter: {counter}</h2> 
        </>
    );
}
export default Timer;
```

#### useContext()
What is useContext()?
useContext() manages state globally.
It can be used together with the useState() Hook to share the state between deeply nested components more easily than with useState alone.

##### The actual Problem?
We have many nested components.
Let's say,the top one and the bottom one needs to access to the state. 
To do this without context, we will need to pass 'props' though each nested components.
This is called 'props drilling'.

