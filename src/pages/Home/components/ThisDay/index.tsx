import styles from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";

export const ThisDay = () => {
  return (
    <div className={styles.thisDay}>
      <div className={styles.thisDay__topBlock}>
        <div className={styles.wrapper}>
          <div className={styles.thisDay__topBlock_temp}>20°</div>
          <div className={styles.thisDay__topBlock_day}>Today</div>
        </div>
        <GlobalSvgSelector id='sunny' />
      </div>
      <div className={styles.thisDay__bottomBlock}>
        <div className={styles.thisDay__bottomBlock_time}>Time: <span>21:54</span></div>
        <div className={styles.thisDay__bottomBlock_city}>City: <span>Kremenchug</span></div>
      </div>
    </div>
  )
}