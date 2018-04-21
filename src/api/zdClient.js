import axios from 'axios'

const BasicAuth = 'Basic dG9tb21pb2tpQG91dGxvb2suY29tOloxbW9taWppLW1hbmp1'
const OAuth = 'Bearer e7f72f2ffa1a045fd302393d5504e500ce1c3fa415c7d2d117c39b20117e6634'

const api = axios.create({
   baseURL: 'https://tomomioki.zendesk.com/api/v2/requests.json'
})

export function listProducts() {
   return api
      .get('', { headers: { Authorization: OAuth } })
      .then(res => {
         console.log('data', res.data);
         
         return res.data
      })
}
