export default function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  // JSX has the ability to automatically render arrays
  // Key is used to let React know the identity of each element in the list.
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}
