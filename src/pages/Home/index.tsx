import styles from './Home.module.scss';
import {ThisDay} from "./components/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo";
import {Days} from "./components/Days/Days";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}