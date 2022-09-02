import styles from './Filters.module.css'


function Filters () {
  return (
    <div className={styles.filtres}>
      <button className={styles.button}>All</button>
      <button className={styles.button}>Active</button>
      <button className={styles.button}>Complited</button>
    </div>
  );
};

export default Filters