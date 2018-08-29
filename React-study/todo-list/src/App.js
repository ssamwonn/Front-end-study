import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {
  (...)

  handleRemove = (id) => {
  const { todos } = this.state;
  this.setState({
    todos: todos.filter(todo => todo.id !== id)
  });
}

render() {
  const { input, todos } = this.state;
  const {
    handleChange,
    handleCreate,
    handleKeyPress,
    handleToggle,
    handleRemove
  } = this;

  return (
    <TodoListTemplate form={(
      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    )}>
      <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoListTemplate>
  );
}
}

export default App;
