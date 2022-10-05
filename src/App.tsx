import styles from './App.module.css';
import poweredImage from './assets/images/powered.png';
import { categories, calculateBMI } from './helpers/imc';
import { GridItem } from './components/GridItem';
import { useState } from 'react';
import  leftArrow from './assets/images/leftarrow.png';

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [showItem, setShowItem] = useState<any>(null);

  const handleCalculateButton = () => {
    if (height && weight) {
      setShowItem(calculateBMI(height, weight));
    } else {
      alert('You need to enter your Height AND your Weight.');
    }
  }

  const handleBackButton = () => {
    setShowItem(null);
    setHeight(0);
    setWeight(0);
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
          disabled={showItem}  
          />
          <input 
          type='number'
          placeholder='Enter your Weight. Ex. 60.5 (Kilograms)'
          value={weight ? weight : ''}
          onChange={e => setWeight(parseFloat(e.target.value))}
          disabled={showItem}  
          />
          <button onClick={handleCalculateButton} disabled={showItem}>Calculate</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem && 
            <div className={styles.grid}>
              {categories.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" />
              </div>
              <GridItem item={showItem}/>
            </div>
          }
        </div>
      </div>

    </div>
  );
}

export default App;