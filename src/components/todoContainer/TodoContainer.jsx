import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './TodoContainer.module.css';
import Input from './Input';
import TodoList from './main/TodoList';
import Footer from './footer/Footer';

function TodoContainer() {

  const todos = useSelector((state) => state.tasks)

  const [filter, setFilter] = useState('all');

  const complitedTodo = () => {
    setFilter('completed');
  };
  const activeTodo = () => {
    setFilter('active');
  };
  const allTodo = () => {
    setFilter('all');
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'all') return todos;
    return todos.filter(i => {
      if (filter === 'completed') {
        return i.complited
      }
      return !i.complited
    });
  }, [todos, filter]);

  return (
    <section className={styles.todoapp}>
      <Input/>
      <TodoList todos={filteredTodos}/>
      <Footer
        todos={filteredTodos}
        filter={filter}
        allTodo={allTodo}
        activeTodo={activeTodo}
        complitedTodo={complitedTodo}
      />
    </section>
  );
};

export default TodoContainer;