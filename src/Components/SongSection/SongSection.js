import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import styles from './SongSection.module.css'
import { Tab } from '@mui/material'
import Carousel from '../Carousel/Carousel'
const SongSection = ({ data, type, className, title, genres }) => {
  const [selectedTab, setSelectedTab] = useState('all')
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }
  const filterSongs = (genre) => {
    if (genre === 'all') {
      return data
    }
    return data.filter((item) => item.genre.key === genre)
  }
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <span className={styles.title}>{title}</span>
      <TabContext value={selectedTab}>
        <TabList
          className={styles.tablist}
          textColor='white'
          onChange={handleTabChange}
        >
          {genres?.map((item) => {
            return (
              <Tab
                className={styles.tab}
                key={item.key}
                label={item.label}
                value={item.key}
              />
            )
          })}
        </TabList>
        {genres?.map((item) => {
          return (
            <TabPanel className={styles.panel} key={item.key} value={item.key}>
              <Carousel data={filterSongs(item.key)} type={type} />
            </TabPanel>
          )
        })}
      </TabContext>
    </div>
  )
}

export default SongSection
