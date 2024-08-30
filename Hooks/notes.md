hooks are javascript functions

 --Rules of Hooks---
 1)only call hooks at the top level
 2)dont call hooks inside loops,conditions or nested functions
 3)dont call hooks from regular javascript functions ...insted you call
 4)call hooks from the react function component
 5)call hooks from custom hooks
 --//--create or use hooks starts with  ---use---  like useState,useContext,useEffect

 //? example 1
 for (let i = 0; i < 100; i++){
		let [state, setState] = useState("praju");
	}
 ---not recomended---

 //? example 2
 if (true) {
    let [state, setState] = useState("praju");
  }
  else {
    console.log("hello")
  }
 ---not recomended---

//? example 3
(() => {
    let x = () => {
      let y = () => {
        console.log("nested function")
      };
      y();
    };
    x();
  })()

 ---not recomended---

--------------------------------------------------------------------
Hooks can only be called inside the body of a function component.

There are three common reasons you might be seeing it:

1)You might be breaking the Rules of Hooks.
2)You might have mismatching versions of React and React DOM.
3)You might have more than one copy of React in the same app.

-------------------------------------------------------------------
Breaking Rules of Hooks 
Functions whose names start with use are called Hooks in React.

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:

✅ Call them at the top level in the body of a function component.
✅ Call them at the top level in the body of a custom Hook.


function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook
  const [width, setWidth] = useState(window.innerWidth);
  // ...
}

-------------------------------------------------------------------
It’s not supported to call Hooks (functions starting with use) in any other cases, for example:

🔴 Do not call Hooks inside conditions or loops.
🔴 Do not call Hooks after a conditional return statement.
🔴 Do not call Hooks in event handlers.
🔴 Do not call Hooks in class components.
🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.

function Bad({ cond }) {
  if (cond) {
    // 🔴 Bad: inside a condition (to fix, move it outside!)
    const theme = useContext(ThemeContext);
  }
  // ...
}

function Bad() {
  for (let i = 0; i < 10; i++) {
    // 🔴 Bad: inside a loop (to fix, move it outside!)
    const theme = useContext(ThemeContext);
  }
  // ...
}

function Bad({ cond }) {
  if (cond) {
    return;
  }
  // 🔴 Bad: after a conditional return (to fix, move it before the return!)
  const theme = useContext(ThemeContext);
  // ...
}

function Bad() {
  function handleClick() {
    // 🔴 Bad: inside an event handler (to fix, move it outside!)
    const theme = useContext(ThemeContext);
  }
  // ...
}

function Bad() {
  const style = useMemo(() => {
    // 🔴 Bad: inside useMemo (to fix, move it outside!)
    const theme = useContext(ThemeContext);
    return createStyle(theme);
  });
  // ...
}

class Bad extends React.Component {
  render() {
    // 🔴 Bad: inside a class component (to fix, write a function component instead of a class!)
    useEffect(() => {})
    // ...
  }
}

------------------------------------------------------------------------------------
