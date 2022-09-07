import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, changingArrow } from '../../../redux/TaskSlice';
import styles from './Input.module.css';
import arrow from './arrowDown.png';

function Input() {

  const [text, setText] = useState(''); 
  const dispatch = useDispatch();

  const createTodoElem = (event) => {
    event.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTask({
        tasks: text,
      })
    )

    setText('');
  };
  
const changingStateArrow = () => dispatch(changingArrow());


  const changeText = (elem) => {
    setText(elem.target.value);
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