import axios from 'axios'
export {fetchImages}
axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = "25162138-7740bc78a7513a91b3e4ac5d0"

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  )
  return response
};