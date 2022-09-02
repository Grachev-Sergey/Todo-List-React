import styles from './input.module.css'
import arrow from './arrowDown.png'

function Input() {
  return (
    <div>
      <button className={styles.button}><img src={arrow} alt="arrow" className={styles.img} /></button>
      <input type="text" className={styles.input} placeholder="What needs to be done?"></input>
    </div>
  );
}

export default Input;