import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

const initialState = {};

export default createStore({
  state() {
    return JSON.parse(JSON.stringify(initialState))
  },
  actions: {},
  mutations: {
    set(state, { key, value }) {
      state[key] = value;
    },
    resetStore(state) {
      const keys = Object.keys(initialState);

      for (let i = keys.length - 1; i >= 0; i--) {
        state[keys[i]] = JSON.parse(JSON.stringify(initialState[keys[i]]));
      }
    }
  },
  modules: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
