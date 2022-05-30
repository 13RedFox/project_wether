import Select from 'react-select'
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import styles from './Header.module.scss'


export const Header = () => {
  const options = [
    {value: 'city-1', label: 'Kremenchug'},
    {value: 'city-2', label: 'Kyiv'},
    {value: 'city-3', label: 'Poltava'}
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id='header-logo'/>
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id='change-theme'/>
        </div>
        <Select defaultValue={options[0]} options={options} styles={colorStyles}/>
      </div>
    </header>
  )
}