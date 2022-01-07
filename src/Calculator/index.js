import styles from './styles.module.scss';

export default function Calculator(){
  return(
    <div className={styles.calculatorContainer}>
      <input type="text" className={styles.screenContainer} value="0" disabled/>

      <div className={styles.keysContainer}>
        <button className={styles.operatorContainer} type="button" value="+">+</button>
        <button className={styles.operatorContainer} type="button" value="-">-</button>
        <button className={styles.operatorContainer} type="button" value="*">*</button>
        <button className={styles.operatorContainer} type="button" value="/">/</button>

        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>

        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>

        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>

        <button type="button" value="0">0</button>
        <button className={styles.decinalButton} type="button" value=".">.</button>
        <button className={styles.allClearButton} type="button" value="all-clear">AC</button>
        
        <button className={styles.equalSignButton} type="button" value="=">=</button>
      </div>
    </div>
  );
}