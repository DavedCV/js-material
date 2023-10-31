import { useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

export default function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <hr />
      <h2>The profile visited is here!</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}
