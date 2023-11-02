function Card({ children }) {
  return (
    <div className="card" style={{ border: "5px solid yellow" }}>
      {children}
    </div>
  );
}

function Text() {
  return (
    <div>
      <h2>This is a card</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Card>
      <Text />
    </Card>
  );
}
