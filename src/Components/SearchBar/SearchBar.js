import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem/MenuItem'
const SearchBar = ({ className, data }) => {
  let filTopAlbums, filNewAlbums
  const { topAlbums, newAlbums } = data
  const [search, setSearch] = useState('')
  const [albums, setAlbums] = useState([])
  const handleChange = (e) => {
    setSearch(e.target.value)
    filTopAlbums = filter(topAlbums, search)
    filNewAlbums = filter(newAlbums, search)
    setAlbums(filTopAlbums.concat(filNewAlbums))
  }
  const filter = (data, search) => {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(search)
    )
    return result
  }
  return (
    <div className={`${styles.searchDiv} ${className}`}>
      <input
        placeholder='Search an album of your choice'
        type='search'
        value={search}
        className={styles.searchInp}
        onChange={handleChange}
      />
      {search && (
        <div className={styles.menu}>
          {albums.map((album) => (
            <MenuItem data={album} />
          ))}
        </div>
      )}
      <button className={styles.searchBtn}>
        <FontAwesomeIcon
          size='lg'
          icon={faSearch}
          className={styles.searchIcon}
        />
      </button>
    </div>
  )
}

export default SearchBar
