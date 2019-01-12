export default {
  state: {
    categories: [],
    userStatistic: {},
    currentUserName: ''
  },
  mutations: {
    CATEGORIES: (state, value) => {
      state.categories = value
    },
    USERSTATISTIC: (state, value) => {
      state.userStatistic = value
    },
    CURRENTUSERNAME: (state, value) => {
      state.currentUserName = value
    }
  },
  getters: {
    getCategories: state => {
      return state.categories
    },
    getUserStatistic: state => {
      return state.userStatistic
    },
    getCurrentUserName: state => {
      return state.currentUserName
    }
  }
}
