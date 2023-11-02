// props are arguments that are passed into components
function ListItem(props) {
  return <li>{props.animal}</li>
}

// This component accepts a props which is an object containing the animals that we defined as a property when we wrote <List animals={animals} />. 
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal}/>
      })}
    </ul>
  );
}

export default function Animals() {
  const animals = ["Lion", "Cow", "Snake", "lizard"];
  
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals}/>
    </div>
  );
}
