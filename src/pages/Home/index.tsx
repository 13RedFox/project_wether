import styles from './Home.module.scss'
import { ThisDay } from './components/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo'
import { Days } from './components/Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { useEffect } from 'react'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../../store/selectors'

export const Home = () => {
	const dispatch = useCustomDispatch()

	const { weather } = useCustomSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentWeather('kremenchug'))
	}, [])
	return (
		<div className={styles.home}>
			<div className={styles.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo />
			</div>
			<Days />
		</div>
	)
}