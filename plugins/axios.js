import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(request => {
    if (store.getters.authToken) {
        request.headers.common['Authorization'] = `Bearer ${store.getters.authToken}`
    }

    request.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    return request
});
