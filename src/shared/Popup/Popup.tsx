import styles from './Popup.module.scss';
import {ThisDayInfoItem} from "../../pages/Home/components/ThisDayInfo/ThisDayInfoItem";
import {Item} from "../../pages/Home/components/ThisDayInfo";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

export const Popup = () => {
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
    <>
      <div className={styles.blur} />
      <div className={styles.popup}>
        <div className={styles.popup__day}>
          <div className={styles.popup__day_temp}>12°</div>
          <div className={styles.popup__day_week}>Среда</div>
          <div className={styles.popup__day_img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={styles.popup__day_time}>Время: <span>00:00</span></div>
          <div className={styles.popup__day_city}>Город: <span>Kremenchug</span></div>
        </div>
        <div className={styles.thisDayInfo__items}>
          {items.map((item: Item) => (
            <ThisDayInfoItem key={item.iconId} item={item}/>
          ))}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>

  )
}