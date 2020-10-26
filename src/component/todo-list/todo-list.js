import { List } from 'antd';
import React from 'react';
import styled from 'styled-components';

import TodoListItem from '../todo-list-item';


const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  onEditSubmit }) => {

  const isTodos = Boolean(todos.length)

  const renderElements = todos => {
    return todos.map((item) => {
      return (
        <TodoListItem  {...item}
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onEditSubmit={onEditSubmit}
        />)
    })
  }

  return (
    <List size="small" bordered>
      {isTodos ?
        renderElements(todos):
        <Img src='./assets/nodata.png' />}
    </List>
  );
}

const Img = styled.img`
  width: 100%;
  margin: auto;
`

export default TodoList;