import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/images/powered.png';
import { categories, calculateBMI } from './helpers/imc';

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const handleCalculateButton = () => {
    if (height && weight) {
      calculateBMI(height, weight);
    } else {
      alert('You need to enter your Height AND your Weight.');
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>BMI means Body Mass Index, parameter adopted by World Health Organization to calculate ideal weight for each person.</p>
          <input 
          type='number'
          placeholder='Enter your Height. Ex. 1.5 (meters)'
          value={height ? height : ''}
          onChange={e => setHeight(parseFloat(e.target.value))}  
          />
          <input 
          type='number'
          placeholder='Enter your Weight. Ex. 60.5 (Kilograms)'
          value={weight ? weight : ''}
          onChange={e => setWeight(parseFloat(e.target.value))}  
          />
          <button onClick={handleCalculateButton}>Calculate</button>
        </div>
        <div className={styles.rightSide}>...</div>
      </div>

    </div>
  );
}

export default App;