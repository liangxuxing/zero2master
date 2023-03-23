import { createStore } from 'vuex'
import { App } from 'vue'

interface menuObj {
  parentId: number
  id: number
  children?: menuObj[]
}
interface State {
  menus: menuObj[]
}

interface NavMenu {
  [key: number]: menuObj
}

const store = createStore<State>({
  state() {
    return {
      menus: []
    }
  },
  getters: {
    getMenusArr(state) {
      const menus = state.menus
      const navMenu: NavMenu = {}
      for (let index = 0; index < menus.length; index++) {
        if (menus[index].parentId === 0) {
          navMenu[menus[index].id] = { ...menus[index] }
        }
        //  else {
        //   let parentId = menus[index].parentId
        //   navMenu[parentId].children = navMenu[parentId].children || []
        //   navMenu[parentId].children?.push(menus[index])
        // }
      }
      for (let index = 0; index < menus.length; index++) {
        let parentId = menus[index].parentId
        if (navMenu[parentId]) {
          navMenu[parentId].children = navMenu[parentId].children || []
          navMenu[parentId].children?.push(menus[index])
        }
      }
      return navMenu
    }
  },
  mutations: {
    updateMenus(state, payload) {
      state.menus = payload
    }
  },
  actions: {},
  modules: {}
})

export const initStore = (app: App<Element>) => {
  app.use(store)
}
