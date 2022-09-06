import { useMemo, useState } from 'react';
import styles from './TodoContainer.module.css';
import Input from './Input';
import TodoList from './main/TodoList';
import Footer from './footer/Footer';

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (!text.trim()) return;
    const todoElem = [
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        isComplited: false,
        focused: false,
      }
    ];
    setTodos(todoElem);
    setText('');
  };

  const removeTodo = (todoId) => {
    const remainingElements = todos.filter(todo => todo.id !== todoId);
    setTodos(remainingElements);
  };

  const switchTodoCompleted = (todoId) => {
    const switchState = todos.map(todo => {
      if (todo.id !== todoId) return todo;
      return {
        ...todo,
        isComplited: !todo.isComplited,
      };
    });
    setTodos(switchState);
  };

  const changingStateArrow = () => {
    const isEverySelected = todos.every((elem) => elem.isComplited);
    const switchState = todos.map(
      todo => {
        return {
          ...todo,
          isComplited: !isEverySelected
        };
      }
    );
    setTodos(switchState);
  };

  const switchFocusInput = (todoId) => {
    const switchFocus = todos.map(
      todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          focused: !todo.focused,
        };
      }
    );
    setTodos(switchFocus);
  };

  const blurInput = (todoId) => {
    const blur = todos.map(
      todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          focused: false,
        };
      }
    );
    setTodos(blur);
  };

  const clearComplited = () => {
    const active = todos.filter(todo => !todo.isComplited);
    setTodos(active);
  };

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
        return i.isComplited
      }
      return !i.isComplited
    });
  }, [todos, filter]);

  return (
    <section className={styles.todoapp}>
      <Input
        text={text}
        setText={setText}
        addTodo={addTodo}
        changingStateArrow={changingStateArrow}
      />
      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        switchTodoCompleted={switchTodoCompleted}
        swtchFocusInput={switchFocusInput}
        blurInput={blurInput}
      />
      <Footer
        todos={todos}
        filter={filter}
        allTodo={allTodo}
        activeTodo={activeTodo}
        complitedTodo={complitedTodo}
        clearComplited={clearComplited}
      />
    </section>
  );
};

export default TodoContainer;