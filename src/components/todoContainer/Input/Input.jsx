import styles from './input.module.css'
import arrow from './arrowDown.png'

function Input({text, setText, addTodo, changingStateArrow}) {
  return (
    <div>
      <button className={styles.button} onClick={() => {changingStateArrow()}}><img src={arrow} alt="arrow" className={styles.img} /></button>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        addTodo()}}>
        <input 
          type="text" 
          className={styles.input}
          placeholder="What needs to be done?"
          value={text} 
          onChange={(elem) => setText(elem.target.value)} 
        />
      </form>
      
    </div>
  );
}

export default Input;