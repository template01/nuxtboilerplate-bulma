import axios from 'axios'

export const state = () => ({
  appinitated: true,
  apiRoot: 'https://jsonplaceholder.typicode.com',
  posts: [],
  previewData: [],
})

//
// function checkReadmore(){
//   if (window.location.hash === '#read') {
//     return true;
//   }else{
//     return false;
//   }
// }
// this.$store.commit('SET_READMORE', true)


export const getters = {

  GET_APP_INITIATED(state) {
    return state.appinitated
  },

  GET_POSTS(state) {
    return state.posts
  },

  GET_PREVIEWDATA(state) {
    return state.previewData
  },
}

export const mutations = {

  SET_PREVIEWDATA(state, previewData) {
    state.previewData = previewData;
  },

  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_APPINITIATED(state, toggle) {
    state.appinitated = toggle;
  }

}


export const actions = {
  // LOAD INITIAL DATA (SSR)
  async nuxtServerInit({
    commit,
    state
  }, {
    req
  }) {

    const postsRes = await axios.get(state.apiRoot + '/posts')
    state.posts = postsRes.data
  },

  // LOAD INITIAL DATA (SPA)
  // async nuxtClientInit({
  //   commit,
  //   state
  // }, {
  //   req
  // }) {
  //
  //   const postsRes = await axios.get(state.apiRoot + '/posts')
  //   state.posts = postsRes.data
  //
  // }



}
