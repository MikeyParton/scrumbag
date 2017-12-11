import axios from 'axios'
import { ROOT_URL } from './config'

const API = {
  getLists: () => (
    axios.get(`${ROOT_URL}/lists`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  )
}

export default API
