import { useState } from "react";

/* 
Choosing the State Structure ---------------------------------------------------

Structuring state well can make a difference between a component that is 
pleasant to modify and debug, and one that is a constant source of bugs.

When you write a component that holds some state, you’ll have to make choices 
about how many state variables to use and what the shape of their data should be


1. Group related state. If you always update two or more state variables at 
the same time, consider merging them into a single state variable.

2. Avoid contradictions in state. When the state is structured in a way that 
several pieces of state may contradict and “disagree” with each other, you 
leave room for mistakes. Try to avoid this.

3. Avoid redundant state. If you can calculate some information from the 
component’s props or its existing state variables during rendering, you should 
not put that information into that component’s state.

4. Avoid duplication in state. When the same data is duplicated between 
multiple state variables, or within nested objects, it is difficult to keep 
them in sync. Reduce duplication when you can.

5. Avoid deeply nested state. Deeply hierarchical state is not very 
convenient to update. When possible, prefer to structure state in a flat way.
*/

// group related state ---------------------------------------------------------

/* export default function MovingDot() {
  // here position wraps both x and y
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
} */

// avoid contradictions in state -----------------------------------------------

/* export default function FeedbackForm() {
  const [text, setText] = useState("");

  // here is better to have just status, than two separate variables
  // to handle isSending and isSent states
  const [status, setStatus] = useState("typing");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
} */

// avoid redundant state -------------------------------------------------------
/* export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // fullname is calculated from the two state variables,
  // fullname does not need to be a state by itlself
  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
} */

// avoid duplication in state --------------------------------------------------

/* const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);

  // this state just stores the id
  const [selectedId, setSelectedId] = useState(0);

  // get the selectedItem from the items state, is better than
  // creating a new selectedItem state that duplicates the
  // refence that could easily get ou of sync by updates
  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
} */

// avoid deeply nested state ---------------------------------------------------

