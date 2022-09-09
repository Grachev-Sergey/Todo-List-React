import styles from './todosBlock.module.css';
import InputField from './inputField';
import TodoList from './tasks/TodoList';
import FiltersAndCounter from './filterBlock/FiltersAndCounter';

function TodosBlock() {
  return (
    <section className={styles.todoApp}>
      <InputField/>
      <TodoList/>
      <FiltersAndCounter/>
    </section>
  );
};

export default TodosBlock;