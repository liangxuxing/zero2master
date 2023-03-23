import { createStore } from 'vuex'
import { App } from 'vue'

const store = createStore({
  state() {
    return {
      menus: []
    }
  },
  getters: {},
  mutations: {
    updateMenus(state,payload){
        state.menus=payload
    }
  },
  actions: {},
  modules: {}
})

export const initStore = (app: App<Element>) => {
  app.use(store)
}
