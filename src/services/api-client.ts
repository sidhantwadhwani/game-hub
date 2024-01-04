import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params:{
        key: '9213c3549a78419eab9c577a7c47c86b'
    }
})

