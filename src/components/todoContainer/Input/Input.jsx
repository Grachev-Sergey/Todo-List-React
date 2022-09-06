import styles from './Input.module.css'
import arrow from './arrowDown.png'

function Input({
  text,
  setText,
  addTodo,
  changingStateArrow,
}) {
  const createTodoElem = (event) => {
    event.preventDefault();
    addTodo();
  };
  const changeText = (elem) => {
    setText(elem.target.value)
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={changingStateArrow}
      >
        <img
          src={arrow}
          alt="arrow"
          className={styles.img}
        />
      </button>
      <form onSubmit={createTodoElem}>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
          value={text}
          onChange={changeText}
        />
      </form>
    </div>
  );
}

export default Input;