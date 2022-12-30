
import axios from 'axios'

const searchImage = async (term) => {
    const result = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
        }, params: {
            query: term
        }
    })
    return result.data.results
}

export default searchImage