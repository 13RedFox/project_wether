import styles from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'

interface ThisDayProps {
	weather: Weather
}

export const ThisDay = ({ weather }: ThisDayProps) => {
	return (
		<div className={styles.thisDay}>
			<div className={styles.thisDay__topBlock}>
				<div className={styles.wrapper}>
					<div className={styles.thisDay__topBlock_temp}>{Math.round(weather.main.temp)}°</div>
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