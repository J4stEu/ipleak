const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    data: false,
}
const mutations = {
    'SET_DATA' (state, data) {
        state.data = data;
    },
}
const actions = {
    initUserData: ({commit}) => {
        axios
        .get('http://192.168.31.247:5000/api/user_ip_data')
        //.post('/api/user_ip_data')
        .then(response => {
            console.log(response.data)
            commit('SET_DATA', response.data)
        })
        .catch(error => {
            console.log(error);
        });
    },
}
const getters = {
    data: state => state.data,
}

export default {
    state,
    getters,
    actions,
    mutations,
} 