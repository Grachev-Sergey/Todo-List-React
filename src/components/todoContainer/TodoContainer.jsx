import { useState } from 'react';
import { useEffect } from 'react';
import styles from './TodoContainer.module.css'
import Input from './Input/Input';
import TodoList from './main/TodoList';
import Footer from './footer/Footer';

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filtred, setFiltred] = useState(todos);

  useEffect(() => {
    setFiltred(todos)
  }, [todos])

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
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const active = todos.filter(todo => !todo.isComplited)
  const activeTodo = () => {
    setFiltred(active);
  };
  
  const complitedTodo = () => {
    const done = todos.filter(todo => todo.isComplited)
    setFiltred(done);
  }
  
  const allTodo = () => {
    setFiltred(todos);
  };

  const clearComplited = () => {
    setTodos(active);
  };

  const switchTodoCompleted = (todoId) => {
    const switchState = todos.map( todo => {
        if (todo.id !== todoId) return todo;
        return {
          ...todo,
          isComplited: !todo.isComplited,
        };
      }
    );
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
    setTodos (switchState);
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

  const blurInput = (todoId)=> {
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

  // const filteredTodos = todos.filter(i => {
  //   if (filter === 'completed') {
  //     return i.isComplited
  //   }
  // })

  return (
    <section className={styles.todoapp}>
      <Input text={text} 
      setText={setText} 
      addTodo={addTodo} 
      changingStateArrow={changingStateArrow}
      />
      <TodoList todos={filtred}
        removeTodo={removeTodo}
        switchTodoCompleted={switchTodoCompleted}
        swtchFocusInput={switchFocusInput}
        blurInput={blurInput}
      />
      <Footer todos={todos}
        allTodo={allTodo}
        activeTodo={activeTodo} 
        complitedTodo={complitedTodo}
        clearComplited={clearComplited}
        />
    </section>
  );
}

export default TodoContainer;