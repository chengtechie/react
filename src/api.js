
import axios from 'axios'

const searchImage = async () => {
    const result = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
        }, params: {
            query: 'cars'
        }
    })
    return result.data
}

export default searchImage