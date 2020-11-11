import axios from 'axios';

const KEY = 'AIzaSyBGB8xyf7Rn2PjaKFBW56XJyUiFvNsaEQg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
