// basic event handler ---------------------------------------------------------
/* export default function Events() {

  // Event handler functions are usually definided inside components
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick}>
      I don't do anything
    </button>
  );
} */

// reading props in event handlers ---------------------------------------------

/* function AlertButton({ children, message }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Events() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
} */

// Passing event handlers as props ----------------------------------------------

/* function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play {movieName}!</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Events() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
 */
// Naming event handler props --------------------------------------------------
// by convention event handler props should start with "on" followed by cappital letter

/* export default function Events() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
} */

// Stoping propagation ---------------------------------------------------------

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log("propagation stopped!");
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Events() {
  return (
    <div className="events" onClick={() => alert("You Clicked the Wrapper")}>
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading")}>Upload Image</Button>
    </div>
  );
}
