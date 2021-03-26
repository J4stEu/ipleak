const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const state = {
    data: {
        "userData": {
            "city": null,
            "country": null,
            "ip": null,
            "loc": null,
            "org": null,
            "postal": null,
            "region": null,
            "timezone": null
        },
        "userProxy": {
            "isProxy": null,
            "proxyHeaders": [],
            "realIp": null,
            "realIpInfo": null
        },
        "userTOR": null,
        "userVPN": {
            "isVPN": null
        }
    },
    realIpInfo: {
        IP: null,
        Country: null,
        Region: null,
        City: null,
        Location: null,
        Timezone: null,
        Provider: null
    }
}
const mutations = {
    'SET_DATA' (state, data) {
        state.data = data;
    },
    'SET_REAL_IP' (state, data) {
        let realInfo = data.userProxy.realIpInfo;
        if (realInfo) {
            state.realIpInfo.IP = realInfo.ip;
            state.realIpInfo.Country = realInfo.country;
            state.realIpInfo.Region = realInfo.region;
            state.realIpInfo.City = realInfo.city;
            state.realIpInfo.Location = realInfo.loc;
            state.realIpInfo.Timezone = realInfo.timezone;
            state.realIpInfo.Provider = realInfo.org;
        }
    },
}
const actions = {
    initUserData: ({commit}) => {
        axios
        .get('http://192.168.31.106:5000/api/user_ip_data')
        //.post('/api/user_ip_data')
        .then(response => {
            console.log(response.data)
            commit('SET_DATA', response.data)
            commit('SET_REAL_IP', response.data)
        })
        .catch(error => {
            console.log(error);
        });
    },
}
const getters = {
    data: state => state.data,
    realIpInfo: state => state.realIpInfo
}

export default {
    state,
    getters,
    actions,
    mutations,
} 