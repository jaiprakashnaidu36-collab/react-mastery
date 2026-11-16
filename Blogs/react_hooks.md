# React Hooks Reference Guide

React Hooks allow you to use state and other React features in functional components without writing a class.

---

## Table of Contents
1. [Rules of Hooks](#rules-of-hooks)
2. [Basic Hooks](#basic-hooks)
   - [`useState`](#usestate)
   - [`useEffect`](#useeffect)
   - [`useContext`](#usecontext)
3. [Additional & Performance Hooks](#additional--performance-hooks)
   - [`useRef`](#useref)
   - [`useMemo`](#usememo)
   - [`useCallback`](#usecallback)
   - [`useReducer`](#usereducer)
4. [Custom Hooks](#custom-hooks)

---

## Rules of Hooks

Before using hooks, remember these two fundamental rules:
1. **Only call Hooks at the top level:** Do not call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the exact same order each time a component renders.
2. **Only call Hooks from React functions:** Call them from React functional components or from custom Hooks—not regular JavaScript functions.

---

## Basic Hooks

### `useState`
Manages local state within a functional component.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Always use a callback when new state depends on previous state */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### `useEffect`
Performs side effects in functional components (e.g., data fetching, subscriptions, manual DOM mutations).

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setUser(data);
      });

    // Cleanup function (runs before next effect or on unmount)
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependency array: re-runs only when `userId` changes

  return <div>{user ? user.name : 'Loading...'}</div>;
}
```
* **No dependency array:** Runs after *every* render.
* **Empty array `[]`:** Runs *only once* after the initial render (mount).
* **With dependencies `[a, b]`:** Runs on mount and whenever `a` or `b` changes.

### `useContext`
Subscribes to React context without introducing nesting (avoids prop drilling).

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={`btn-${theme}`}>Styled Button</button>;
}
```

---

## Additional & Performance Hooks

### `useRef`
Returns a mutable ref object whose `.current` property persists across renders without triggering a re-render when updated. Commonly used for accessing DOM elements.

```jsx
import { useRef } from 'react';

function TextInputWithFocus() {
  const inputEl = useRef(null);

  const handleFocus = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}
```

### `useMemo`
Memoizes an expensive calculation so it is only recomputed when one of its dependencies changes.

```jsx
import { useMemo } from 'react';

function ExpensiveList({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
```

### `useCallback`
Memoizes a function definition between re-renders. Useful when passing callbacks to optimized child components (`React.memo`) that rely on reference equality to prevent unnecessary renders.

```jsx
import { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []); // Function reference remains identical across renders

  return <ChildComponent onReset={handleReset} />;
}
```

### `useReducer`
An alternative to `useState` for managing complex state logic involving multiple sub-values or when the next state depends on the previous one.

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

---

## Custom Hooks

Custom Hooks let you extract component logic into reusable functions. Their names **must** start with `use`.

```jsx
import { useState, useEffect } from 'react';

// Custom Hook: useWindowWidth
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage in a component
function ResponsiveHeader() {
  const width = useWindowWidth();
  return <h1>Window width is: {width}px</h1>;
}
```