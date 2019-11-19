import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    driverCat: '12211',
  },
  mutations: {
    changeValue (state, payload) {
       
      let newCat   = ''
      let items = payload.items
      let value = payload.value    
      for(let i = 0; i< items.length; i++){
        if(value.indexOf(items[i]) != -1){
          newCat += '2'
        }
        else{
          newCat += '1'
        }
      }  
      state.driverCat = newCat    
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
