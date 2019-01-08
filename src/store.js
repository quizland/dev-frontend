export default {
  state: {
    categories: [],
    currentUserName: ''
  },
  mutations: {
    CATEGORIES: (state, value) => {
      state.categories = value
    },
    CURRENTUSERNAME: (state, value) => {
      state.currentUserName = value
    }
  },
  getters: {
    getCategories: state => {
      return state.categories
    },
    getCurrentUserName: state => {
      return state.currentUserName
    }
  }
}
