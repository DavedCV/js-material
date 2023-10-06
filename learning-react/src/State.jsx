// State is a component's memory

/*

Hooks are functions that let you use React features. All hooks are recognizable 
by the use prefix.

- Hooks can only be called from the top level of a functional component.
- Hooks can’t be called from inside loops or conditions.

Use state hook -----------------------------------------------------------------

It takes an initial value as a parameter and returns an array with two elements 
that we can destructure to get:
- The current state value
- A function to update the state value

const [stateValue, setStateValue] = useState(initialValue);
*/

import React, { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function State() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="state" style={{ backgroundColor }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
