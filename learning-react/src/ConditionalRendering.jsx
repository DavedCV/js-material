// Using the ternary operator
/*
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}
*/

// Using the && operator
/*
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
*/

// We can also use if, if/else, and switch to conditionally render something.
function List(props) {
  if (!props.animals) return <div>Loading...</div>;

  if (props.animals.length === 0)
    return <div>There are no animals in the list!</div>;

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
  )
}

export default function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
