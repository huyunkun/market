const mutations = {
    getMerchantList(state,data){
        console.log(data)
        let mechant = {};
        for (let i=0;i<data.list.length;i++) {
            mechant = {
                name:data.list[i].name,
                score:data.list[i].score,
                time:data.list[i].time,
                distance:data.list[i].distance,
                sellCount:data.list[i].sellCount
            }
            state.merChants.push(mechant)
        }
    },
}

export default mutations