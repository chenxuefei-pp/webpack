/**
 * Created by chenxuefei-note on 2017/4/25.
 */
 
import Vue from 'vue'
import axios from 'axios'

Vue.use(axios)

// 设定 CSRFTOKEN HTTP头 
if(window.Django.csrfToken != undefined) {
  axios.defaults.headers.common['X-CSRFTOKEN'] = window.Django.csrfToken
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
