import React from 'react';

interface Props {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  count: number;
}

export const Footer: React.FC<Props> = ({ filter, setFilter, count }) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {count} items left
      </span>
      <nav className="filter" data-cy="Filter">
        {['all', 'active', 'completed'].map(f => (
          <a
            key={f}
            href={`#/${f}`}
            className={`filter__link ${filter === f ? 'selected' : ''}`}
            data-cy={`FilterLink${f.charAt(0).toUpperCase() + f.slice(1)}`}
            onClick={e => {
              e.preventDefault();
              setFilter(f as 'all' | 'active' | 'completed');
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </a>
        ))}
      </nav>
    </footer>
  );
};
