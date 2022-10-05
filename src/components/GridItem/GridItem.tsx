import { Category } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../assets/images/up.png';
import downImage from '../../assets/images/down.png';

type Props = {
    item: Category
} 

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color} }>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} width="30" alt="" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.userBmi && 
                <div className={styles.yourBmi}>
                    Your Body Mass Index is <strong>{item.userBmi.toFixed(2)}</strong> kg/m².
                </div>
            }
            <div className={styles.gridInfo}>
                <> BMI is between <strong>{item.bmi[0]}</strong> and <strong>{item.bmi[1]}</strong> </>
            </div>
        </div>
    );
}