import "./App.css";
// import Greeting from "./FirstComponent";
// import AnimalsStatic from "./ListOfElements";
// import AnimalsProps from "./ListOfComponents";
// import AnimalsConditional from "./ConditionalRendering";
// import PackingList from "./ConditionalRedering2";
// import Wrapper from "./PassingAsChildren";
// import List from "./RenderingLists";
// import TodoList from "./Keys";
// import ButtonsWrapper from "./Props";
// import State from "./State";
// import Events from "./Events";
// import State from "./State2";
// import State from "./State3";
// import State from "./StateAsSNapshot";
// import State from "./QueuingStateUpdated";
// import State from "./UpdatingObjectsInState";
// import State from "./UpdatingArrayStates";
// import Form, { Statuses } from "./reactingToInputWithState";
// import Form from "./StateStructure";
// import Accordion from "./SharingStateBetweenComponents";
// import Clock from "./useEffectOdin";
// import ChatDemo from "./UseEffect";
// import UseEffectWithRefs from "./useEffectRefsIntoDependencies";
// import TaskInput from "./buildingClassComponent";
// import TaskInput from "./buildingClassComponent2";
// import Connection from "./classComponentLifecycleMethods";
// import RenderName from "./propTypes";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Learning React!</h1>
      <ul>
        <li>
          <Link to="/profile">Default</Link>
        </li>
        <li>
          <Link to="/profile/popeye">Popeye</Link>
        </li>
        <li>
          <Link to="/profile/spinach">Spinach</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
