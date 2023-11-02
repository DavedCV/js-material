function Button({ text, color, fontSize, handleClick }) {
  const buttonStyles = { color: color, fontSize: fontSize + "px" };

  return (
    <button style={buttonStyles} onClick={handleClick}>
      {text}
    </button>
  );
}

// Setting default props in a component
Button.defaultProps = {
  text: "Click Me",
  color: "blue",
  fontSize: 12,
};

export default function ButtonsWrapper() {
  const handleClick = () => alert("Button Clicked!");

  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} handleClick={handleClick}/>  
      <Button text="Dont Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="yellow" fontSize={20} />
      <Button />
    </div>
  );
}
