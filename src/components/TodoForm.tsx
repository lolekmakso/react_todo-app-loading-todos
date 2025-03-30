import React, { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

export const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      return;
    }

    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
};
