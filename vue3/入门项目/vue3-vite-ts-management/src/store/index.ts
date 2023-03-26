import { createStore } from 'vuex'
import { App } from 'vue'
import { getAdminLoginInfo } from '../request/api'

interface menuObj {
  parentId: number
  id: number
  title: string
  hidden: number
  children: menuObj[]
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
      }
      for (let index = 0; index < menus.length; index++) {
        let parentId = menus[index].parentId
        if (navMenu[parentId]) {
          navMenu[parentId].children = navMenu[parentId].children || []
          navMenu[parentId].children?.push(menus[index])
        }
      }
      console.log('44')
      console.log(navMenu)

      return navMenu
    }
  },
  mutations: {
    updateMenus(state, payload) {
      console.log(payload, 'payload')

      state.menus = payload
      console.log('33')
    }
  },
  actions: {
    getMenuInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getAdminLoginInfo().then((res) => {
          if (res.code === 200) {
            commit('updateMenus', res.data.menus)
            resolve(res.data)
          } else {
            reject(res)
          }
        })
      })
    }
  },
  modules: {}
})

export const initStore = (app: App<Element>) => {
  app.use(store)
}

export default store
