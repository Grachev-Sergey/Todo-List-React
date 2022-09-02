import styles from './Footer.module.css'
import Filters from './filters/Filters';


function Footer () {
  return (
    <div className={styles.footer}>
      <span className={styles.counter}>1 items left</span>
      <Filters />
      <button className={styles.button}>Clear complited</button>
    </div>
  );
};

export default Footer