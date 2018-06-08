export default {
    loginAc(state,payload){
        state.commit('loginMu',{idval:payload.idval,passval:payload.passval})
    }
}