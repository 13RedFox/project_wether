import {Item} from "./index";
import styles from './ThisDayInfo.module.scss';
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector";

interface ThisDayInfoItemProps {
  item: Item
}

export const ThisDayInfoItem = ({item}: ThisDayInfoItemProps) => {
  const {iconId, name, value} = item;

  return (
    <div className={styles.item}>
      <div className={styles.item__icon}>
        <IndicatorSvgSelector id={iconId}/>
      </div>
      <div className={styles.item__name}>{name}</div>
      <div className={styles.item__title}>{value}</div>
    </div>
  )
}