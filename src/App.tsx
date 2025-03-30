import React, { useEffect, useState } from 'react';
import { getTodos, USER_ID } from './api/todos';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';
import { ErrorNotification } from './components/ErrorNotification';
import { Footer } from './components/Footer';
import { TodoForm } from './components/TodoForm';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => setError('Unable to load todos'));
  }, []);

  const handleToggle = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'active'
      ? !todo.completed
      : filter === 'completed'
        ? todo.completed
        : true,
  );

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>
      <TodoForm
        onAdd={title =>
          setTodos([
            ...todos,
            { id: Date.now(), userId: USER_ID, title, completed: false },
          ])
        }
      />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <Footer
        filter={filter}
        setFilter={setFilter}
        count={filteredTodos.length}
      />
      <ErrorNotification error={error} onClose={() => setError(null)} />
    </div>
  );
};
