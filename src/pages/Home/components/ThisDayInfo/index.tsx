import cloud from '../../../../assets/images/cloud.png';
import styles from './ThisDayInfo.module.scss';
import {ThisDayInfoItem} from "./ThisDayInfoItem";

export interface Item {
  iconId:  string,
  name:  string,
  value:  string,
}

export const ThisDayInfo = () => {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      iconId: 'pressure',
      name: 'Давление ',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      iconId: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ]

  return (
    <div className={styles.thisDayInfo}>
      <div className={styles.thisDayInfo__items}>
        {items.map((item:Item) => (
          <ThisDayInfoItem key={item.iconId} item={item} />
        ))}
      </div>
      <img src={cloud} alt="Cloud" className={styles.thisDayInfo__img}/>
    </div>
  )
}