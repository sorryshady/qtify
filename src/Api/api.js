import axios from 'axios'
const initURL = 'https://qtify-backend-labs.crio.do'

export const fetchAlbums = async () => {
  const topAlbums = (await axios.get(`${initURL}/albums/top`)).data
  const newAlbums = (await axios.get(`${initURL}/albums/new`)).data
  return {
    topAlbums,
    newAlbums,
  }
}

export const fetchSongs = async () => {
  return (await axios.get(`${initURL}/songs`)).data
}
export const fetchAlbumData = async (slug) => {
  return (await axios.get(`${initURL}/${slug}`)).data
}
export const fetchFaqData = async () => {
  return (await axios.get(`${initURL}/faq`)).data
}
export const fetchGenreData = async () => {
  return (await axios.get(`${initURL}/genres`)).data
}
