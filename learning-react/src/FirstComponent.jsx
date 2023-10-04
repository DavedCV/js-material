import { useState } from "react";

export default function Greeting() {
  const [change, setChange] = useState(true);

  return (
    <div>
      <h1>This is my first react component!</h1>
      <div>
        <button onClick={() => setChange(!change)}>Click Here!</button>
        {change ? <h1>Text 1</h1> : <h1>Text 2</h1>}
      </div>
    </div>
  );
}
