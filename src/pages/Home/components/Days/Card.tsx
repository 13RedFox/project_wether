import styles from './Days.module.scss';
import {Day} from "./Days";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";

interface CardProps {
  day: Day;
}

export const Card = ({day}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__day}>{day.day}</div>
      <div className={styles.card__dayInfo}>{day.day_info}</div>
      <div className={styles.card__img}>
        <GlobalSvgSelector id={day.icon_id}/>
      </div>
      <div className={styles.card__tempDay}>{day.temp_day}</div>
      <div className={styles.card__tempNight}>{day.temp_night}</div>
      <div className={styles.card__info}>{day.info}</div>
    </div>
  )
}