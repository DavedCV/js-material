/* 
The lifecycle of an Effect  ----------------------------------------------------

Every React component goes through the same lifecycle:
- A component mounts when it’s added to the screen.
- A component updates when it receives new props or state, usually in response 
to an interaction.
- A component unmounts when it’s removed from the screen.

It’s a good way to think about components, but not about Effects. 

Try to think about each Effect independently from your component’s lifecycle.
An Effect describes how to synchronize an external system to the current props 
and state. As your code changes, synchronization will need to happen more or 
less often.

Always focus on a single start/stop cycle at a time. It shouldn’t matter whether 
a component is mounting, updating, or unmounting. All you need to do is to 
describe how to start synchronization and how to stop it. If you do it well, 
your Effect will be resilient to being started and stopped as many times as 
it’s needed.

Every time after your component re-renders, React will look at the array of 
dependencies that you have passed. If any of the values in the array is 
different from the value at the same spot that you passed during the previous 
render, React will re-synchronize your Effect. Reactive values must be included 
in dependencies.

- Each Effect in your code should represent a separate and independent 
synchronization process.
*/

import { useState, useEffect } from "react";

function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "...",
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

/* const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId, addNum, num }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  //num and addNum are not dependencies of the useRef, so even if the
  // component is re-rendered by the change in the num state prop, the effect is 
  // not re-synchronized 
  return (
    <h1 onClick={addNum}>
      Welcome to the {roomId} room! {num}
    </h1>
  );
} 
*/

/* export default function ChatDemo() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && (
        <ChatRoom roomId={roomId} addNum={() => setNum(num + 1)} num={num} />
      )}
    </>
  );
} */

/*
Effects react to reactive values 

Why doesn’t serverUrl need to be a dependency?

This is because the serverUrl never changes due to a re-render. It’s always 
the same no matter how many times the component re-renders and why. Since 
serverUrl never changes, it wouldn’t make sense to specify it as a dependency. 
After all, dependencies only do something when they change over time!

If serverUrl was a state variable, it would be reactive. Reactive values must 
be included in dependencies:
*/

/* function ChatRoom({ roomId }) {
  // Props change over time
  const [serverUrl, setServerUrl] = useState("https://localhost:1234"); // State may change over time

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // Your Effect reads props and state
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // So you tell React that this Effect "depends on" on props and state

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function ChatDemo() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
} */

/* 
Empty dependency array

Thinking from the component’s perspective, the empty [] dependency array means 
this Effect connects to the chat room only when the component mounts, and 
disconnects only when the component unmounts.
*/

/* const serverUrl = "https://localhost:1234";
const roomId = "general";

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function CHatDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom />}
    </>
  );
} */

/* 
All variables declared in the component body are reactive 

Props and state aren’t the only reactive values. Values that you calculate 
from them are also reactive. If the props or state change, your component will 
re-render, and the values calculated from them will also change. This is why 
all variables from the component body used by the Effect should be in the 
Effect dependency list.

All values inside the component (including props, state, and variables in 
your component’s body) are reactive. Any reactive value can change on a 
re-render, so you need to include reactive values as Effect’s dependencies.
*/
