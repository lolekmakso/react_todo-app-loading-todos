import React from 'react';
import { Todo } from '../types/Todo';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={`todo-${todo.id}`} className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </label>
      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </div>
  );
};
