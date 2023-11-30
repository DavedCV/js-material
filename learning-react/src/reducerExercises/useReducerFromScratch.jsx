/* 
In the earlier examples, you imported the useReducer Hook from React. This 
time, you will implement the useReducer Hook itself! Here is a stub to get you 
started. It shouldn’t take more than 10 lines of code.
*/

import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => setState(reducer(state, action));

  return [state, dispatch];
}
