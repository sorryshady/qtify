import React from 'react'
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchBar = ({ className }) => {
  return (
    <div className={`${styles.searchDiv} ${className}`}>
      <input
        placeholder='Search an album of your choice'
        type='search'
        className={styles.searchInp}
      />
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
