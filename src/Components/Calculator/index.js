import styles from './styles.module.scss';
import { useState } from 'react';


export default function Calculator(){

    const [selectedValue, setSelectedValue] = useState([]);


    function handleInput(e) {
      const currentValue = e.target.value;
      setSelectedValue(oldArray => [...oldArray, currentValue])
      console.log(selectedValue);
    }

    function makeCalc() {
      selectedValue.map((value) => {
        if(value === '+')
          console.log("sum ");
        else if(value === '-')
          console.log("sub ");
        else if(value === '/')
          console.log("div ");
        else if(value === '*')
          console.log("mult ");
        else
          console.log(value + "")
      })
      console.log("fazer o calculo...")
    }


  return(
    <div className={styles.calculatorContainer}>
      <input 
        type="text"
        onClick={handleInput}
        className={styles.screenContainer} 
        value="0" 
        disabled
      />

      <div className={styles.keysContainer}>
        <button 
          className={styles.operatorContainer} 
          onClick={handleInput}
          type="button" 
          value="+">
          +
        </button>

        <button 
          className={styles.operatorContainer} 
          onClick={handleInput} 
          type="button" 
          value="-">
          -
        </button>

        <button 
          className={styles.operatorContainer} 
          onClick={handleInput} 
          type="button" 
          value="*">
          *
        </button>

        <button 
          className={styles.operatorContainer} 
          onClick={handleInput} 
          type="button" 
          value="/">
          /
        </button>

        <button type="button" onClick={handleInput} value="7">7</button>
        <button type="button" onClick={handleInput} value="8">8</button>
        <button type="button" onClick={handleInput} value="9">9</button>

        <button type="button" onClick={handleInput} value="4">4</button>
        <button type="button" onClick={handleInput} value="5">5</button>
        <button type="button" onClick={handleInput} value="6">6</button>

        <button type="button" onClick={handleInput} value="1">1</button>
        <button type="button" onClick={handleInput} value="2">2</button>
        <button type="button" onClick={handleInput} value="3">3</button>

        <button type="button"onClick={handleInput} value="0">0</button>

        <button 
          className={styles.decinalButton} 
          onClick={handleInput} 
          type="button" 
          value=".">
          .
        </button>

        <button 
          className={styles.allClearButton}
          onClick={handleInput}
          type="button"
          value="all-clear">
          AC
        </button>
        
        <button 
          className={styles.equalSignButton}
          onClick={handleInput, makeCalc}
          // onClick={makeCalc}
          type="button" 
          value="=">
          =
        </button>
      </div>
    </div>
  );
}