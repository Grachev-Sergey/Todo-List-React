import styles from './TodoList.module.css'
import TodoElem from './todoElem/TodoElem';

function TodoList({
  todos,
  removeTodo,
  switchTodoCompleted,
  swtchFocusInput,
  blurInput,
}) {
  return (
    <ul className={styles.todoList}>
      {
        todos.map(todo => (
          <TodoElem
            key={todo.id}
            removeTodo={removeTodo}
            switchTodoCompleted={switchTodoCompleted}
            todo={todo}
            swtchFocusInput={swtchFocusInput}
            blurInput={blurInput}
          />
        ))
      }
    </ul>
  );
};

export default TodoList