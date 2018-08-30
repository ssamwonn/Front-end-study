import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
  render(){
      (...)
  }
}

export default TodoItem;