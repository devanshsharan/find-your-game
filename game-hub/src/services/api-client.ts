import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e5d1f6c04d2647f39b179804c1165c01'
    }
})