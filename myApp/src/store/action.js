import {merchantList} from '../api/api'

const actions = {
    _GETMECHANTLIST({ commit }){
        merchantList().then(res => {
            commit('getMerchantList',res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default actions