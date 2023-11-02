// base component --------------------------------------------------------------

/*
export default class ClassInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </section>
    );
  }
}
*/

/*
Implement a delete button for each task. The delete button should remove that 
specific task from the state array, thus deleting the task itself! Styling isn’t 
a priority at this moment, but the button tag should be styled by default.
*/

/* 
Implement a new class component, Count that displays the count of the number 
of todos, at any given time.

(implemented and added to the ClassInput component)
*/

/* 
Implement an edit button for each task. It should replace the todo with an 
input field, and change the button itself to ‘Resubmit’, so the edits can be 
saved. This is a comparatively harder task, kudos for when you finish it!
*/

import React from "react";

export default class ClassInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      todoIdBeingEdited: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditState = this.handleEditState.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state) => ({
      todos: state.todos.concat({ text: state.inputVal, editing: false }),
      inputVal: "",
    }));
  }

  handleDelete(targetTodo) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo != targetTodo),
    }));
  }

  handleEditChange(e, targetTodo) {
    const newTodos = this.state.todos.map((todo) =>
      todo === targetTodo ? { ...todo, text: e.target.value } : todo,
    );

    this.setState((state) => ({
      ...state,
      todos: newTodos,
    }));
  }

  handleEditState(targetTodo) {
    const newTodos = this.state.todos.map((todo) =>
      todo === targetTodo ? { ...todo, editing: !todo.editing } : todo,
    );

    this.setState((state) => ({
      ...state,
      todos: newTodos,
      todoIdBeingEdited: targetTodo.text,
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        <h4>All the tasks!</h4>
        <Count count={this.state.todos.length} />

        <ul>
          {this.state.todos.map((todo) =>
            !todo.editing ? (
              <li key={todo.text}>
                {todo.text}
                <button onClick={() => this.handleDelete(todo)}>delete</button>
                <button onClick={() => this.handleEditState(todo)}>edit</button>
              </li>
            ) : (
              <li key={todo.text}>
                <form onSubmit={() => this.handleEditState(todo)}>
                  <input
                    type="text"
                    name="text"
                    value={
                      this.state.todoIdBeingEdited === todo.id ? todo.text : 
                    }
                  />
                  <button type="submit">resubmit</button>
                </form>
              </li>
            ),
          )}
        </ul>
      </section>
    );
  }
}

class Count extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count } = this.props;

    return (
      <div className="count">
        <p>Number of tasks: {count}</p>
      </div>
    );
  }
}
