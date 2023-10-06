import { useState } from "react";

/*
State as snapshot --------------------------------------------------------------

State variables might look like regular JavaScript variables that you can read 
and write to. However, state behaves more like a snapshot. Setting it does not 
change the state variable you already have, but instead triggers a re-render.

For an interface to react to the event, you need to update the state.
*/

/*
export default function State() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) {
    return <h1>Your message is on the way!</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
function sendMessage(message) {
  console.log(message);
}
 */

/* 
State over time ----------------------------------------------------------------

The async setTimeout works with the state variable of the snapshot when it was
invoqued 
*/

export default function State() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(() => alert(`You said ${message} to ${to}`), 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
