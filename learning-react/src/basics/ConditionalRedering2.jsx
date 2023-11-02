// this file contains different forms for create the Item component
// using conditions

// function Item({name, isPacked}) {}

/*
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}
*/

// conditionally returning
/*
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
*/

// conditionally returning nothing with null
// if the return is null, nothing is rendered
/* function Item({ name, isPacked }) {
  if (isPacked) return null;
  return <li className="item">{name}</li>;
} */

// ternary op
/* function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✔" : name}</li>;
}
*/

// logical &&
/* function Item({name, isPacked}) {
  return <li className="item">{name} {isPacked && " ✔"}</li>
} */

// jsx variables
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) itemContent = name + " ✔";

  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>David's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
