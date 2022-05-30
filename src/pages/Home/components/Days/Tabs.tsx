import styles from './Days.module.scss';

interface TabsProps {
  value: string;
}

export const Tabs = () => {
  const tabs: TabsProps[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ]

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {
          tabs.map((tab: TabsProps) => (
            <div key={tab.value} className={styles.tabs__tab}>{tab.value}</div>
          ))
        }
      </div>
      <div className={styles.tabs__cancel}>Отменить</div>
    </div>
  )
}