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
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        isComplited: false,
      }
    ]);
    setText('');
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const activeTodo = () => {
    let adctive = todos.filter(todo => todo.isComplited === false)
    setFiltred(adctive)
    console.log(todos)
  };

  const complitedTodo = () => {
    let done = todos.filter(todo => todo.isComplited === true)
    setFiltred(done)
    console.log(todos)
  }
  
  const allTodo = () => {
    setFiltred(todos)
    console.log(todos)
  };

  const switchTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          return {
            ...todo,
            isComplited: !todo.isComplited,
          }
        }
      )
    )
  };

  const changingStateArrow = () => {

    setTodos (
      todos.map((todo) => {
        if (!todo.isComplited) 
        return {
          ...todo,
          isComplited: true,
        }
        if(todo.isComplited)
        return{
          ...todo,
          isComplited: true,
        }
      })
    )
  };

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
      />
      <Footer todos={todos} allTodo={allTodo} activeTodo={activeTodo} complitedTodo={complitedTodo}/>
    </section>
  );
}

export default TodoContainer;