/* 
render() -----------------------------------------------------------------------

It runs on mount and update of a component. Render should be pure, meaning it 
doesn’t modify component state, returns the same thing each time it’s called 
(given the same inputs), and doesn’t directly interact with the browser.

componentDidMount() ------------------------------------------------------------

This method is run after the component is mounted (inserted in the DOM tree). 
You should make any calls to fetch data that is needed for the component here. 
It is also a good place to do anything that is reliant on the component.

componentDidUpdate() -----------------------------------------------------------

This method is run after a component re-renders. In this method you should be 
updating anything that needs to be changed in response to either the DOM 
changing, or any states that you might want to act on upon change. For example, 
you’d want to refetch user data if the user changes.

componentWillUnmount() ---------------------------------------------------------

This is the last lifecycle method, which is called before a component is 
unmounted and destroyed. In this method you should be performing cleanup 
actions, so that would be cancelling network requests, clearing timers, etc.
*/

import { useState, Component } from "react";

function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "...",
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
}

class ChatRoom extends Component {
  state = {
    serverUrl: "https://localhost:1234",
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect();
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{" "}
          <input
            value={this.state.serverUrl}
            onChange={(e) => {
              this.setState({
                serverUrl: e.target.value,
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
