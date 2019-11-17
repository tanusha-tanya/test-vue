import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    driverCat: '12211',
  },
  mutations: {
    changeValue (state, payload) {  
      state.driverCat = ''
      let items = payload.items
      let value = payload.value
      for(let i = 0; i< items.length; i++){
        if(value.indexOf(items[i]) != -1){
          state.driverCat += '2'
        }
        else{
          state.driverCat += '1'
        }
      }
    }
  },
  actions: {
    changeValue({commit}, payload){         
      commit('changeValue', payload)
    }
  },
  modules: {
  },
  getters: {
    driverCat: s => s.driverCat,
  }
})
