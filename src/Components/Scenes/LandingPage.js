import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import styles from './LandingPage.module.css'
import HeroSection from '../HeroSection/HeroSection'
import FaqSection from '../FaqSection/FaqSection'
import {
  fetchAlbums,
  fetchFaqData,
  fetchGenreData,
  fetchSongs,
} from '../../Api/api'
import AlbumSection from '../AlbumSection/AlbumSection'
import SongSection from '../SongSection/SongSection'
import { useCallback } from 'react'
const LandingPage = () => {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const fetchData = useCallback(async () => {
    try {
      const albums = await fetchAlbums()
      const songs = await fetchSongs()
      const genres = await fetchGenreData()
      genres.data.unshift({ key: 'all', label: 'All' })
      const faq = await fetchFaqData()
      const dataObj = { ...albums, songs, genres: genres.data, faq: faq.data }
      setData(dataObj)
      const searchDataObj = { ...albums }
      setSearchData(searchDataObj)
    } catch (e) {
      console.error(e)
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <NavBar>
        <SearchBar className={styles.desktop} data={searchData} />
      </NavBar>
      <SearchBar className={styles.mobile} data={searchData} />
      <HeroSection />
      <div className={styles.content}>
        <AlbumSection
          data={data.topAlbums}
          type={'album'}
          title={'Top Albums'}
        />
        <AlbumSection
          data={data.newAlbums}
          type={'album'}
          title={'New Albums'}
        />
        <SongSection
          title={'Songs'}
          genres={data.genres}
          data={data.songs}
          type={'song'}
        />
        <FaqSection data={data.faq} />
      </div>
    </>
  )
}

export default LandingPage
