/* 
In this example, an Effect subscribes to the window pointermove event to move 
a pink dot on the screen. Try hovering over the preview area (or touching the 
screen if you’re on a mobile device), and see how the pink dot follows your 
movement.

There is also a checkbox. Ticking the checkbox toggles the canMove state variable, but this state variable is not used anywhere in the code. Your task is to change the code so that when canMove is false (the checkbox is ticked off), the dot should stop moving. After you toggle the checkbox back on (and set canMove to true), the box should follow the movement again. In other words, whether the dot can move or not should stay synchronized to whether the checkbox is checked.
*/

import { useState, useEffect } from "react";

export default function SwitchSync() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    if (canMove) {
      window.addEventListener("pointermove", handleMove);
      return () => window.removeEventListener("pointermove", handleMove);
    }
  }, [canMove]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}
