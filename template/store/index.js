export const state = () => ({
  appinitated:false,
  screensize: 0,
  apiRoot: 'https://api.sandervanwettum.com/?rest_route=/',
  screensizeformat:null
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

  getappinitated(state) {
    return state.appinitated
  },

  screensize(state){
    return state.screensizeformat
  },
}

export const mutations = {

  SET_APPINITIATED(state, toggle) {
    state.appinitated = toggle;
  },

  SET_SCREENSIZEFORMAT(state, screensizeformat) {
    state.screensizeformat = screensizeformat;
  },

}
