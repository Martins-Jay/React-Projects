import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log(storedValue); // null initially
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

/* ------------------ 
    Mental model
------------------- */

// Component
//    ↓ calls
// useLocalStorageState()
//    ↓ creates
// [value, setValue]
//    ↓ returns
// [value, setValue]
//    ↓ component renames
// [watched, setWatched]
//    ↓ component calls
// setWatched(newValue)
//    ↓
// value updates
//    ↓
// useEffect runs
//    ↓
// localStorage updates
