import styles from './TodoElem.module.css'
import checkMark from './CheckMark.png'

function TodoElem () {
  return (
    <li>
      <button className={styles.toggle}><img src={checkMark} alt="checkbox" className={styles.img} /></button>
      <label className={styles.label}>123</label>
      <button className={styles.delete}>x</button>
    </li>
  );
};

export default TodoElem