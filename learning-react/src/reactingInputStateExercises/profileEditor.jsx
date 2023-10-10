/* 
This form switches between two modes: in the editing mode, you see the inputs, 
and in the viewing mode, you only see the result. The button label changes 
between “Edit” and “Save” depending on the mode you’re in. When you change the 
inputs, the welcome message at the bottom updates in real time.

Your task is to reimplement it in React in the sandbox below. 
*/

import { useState } from "react";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [editing, setEditing] = useState(false);

  const fullName = firstName + " " + lastName;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEditing(!editing);
      }}
    >
      <label>
        First name:
        {!editing ? (
          <b>{firstName}</b>
        ) : (
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        )}
      </label>
      <br />
      <label>
        Last name:
        {!editing ? (
          <b>{lastName}</b>
        ) : (
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        )}
      </label>
      <br />
      <button type="submit">{!editing ? "Edit" : "Save"} Profile</button>
      <p>
        <i>Hello, {fullName}!</i>
      </p>
    </form>
  );
}
