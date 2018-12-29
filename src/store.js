export default {
  state: {
    categories: []
  },
  mutations: {
    CATEGORIES: (state, value) => {
      state.categories = value
    }
  },
  getters: {
    getCategories: state => {
      return state.categories
    }
  }
}
