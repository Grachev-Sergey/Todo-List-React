import styles from './TodoContainer.module.css'
import Input from './Input/Input';
import TodoList from './main/TodoList';
import Footer from './footer/Footer';

function TodoContainer() {
  return (
    <section className={styles.todoapp}>
      <Input />
      <TodoList />
      <Footer />
    </section>
  );
}

export default TodoContainer;