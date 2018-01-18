import _ from 'lodash'

export default ({
  isClient,
  store
}) => {
  if (isClient) {
    const detectScreensize = () => {

      var mobileBreak = 768
      var tabletBreak = 1280
      var desktopBreak = 1920

      if (window.innerWidth < mobileBreak) {
        store.commit('SET_SCREENSIZEFORMAT', 'screen-is-s')
        // store.commit('SET_SMALLERMEDIUM', true)
      }
      if (window.innerWidth >= mobileBreak && window.innerWidth <= tabletBreak) {
        store.commit('SET_SCREENSIZEFORMAT', 'screen-is-m')
      }

      if (window.innerWidth >= tabletBreak && window.innerWidth <= desktopBreak) {
        store.commit('SET_SCREENSIZEFORMAT', 'screen-is-l')
      }

      if (window.innerWidth > desktopBreak) {
        store.commit('SET_SCREENSIZEFORMAT', 'screen-is-xl')
      }
      console.log('go')
    };

    detectScreensize();

    window.addEventListener('resize', _.debounce(detectScreensize, 100));

    window.setTimeout(function(){
      detectScreensize();
      store.commit('SET_APPINITIATED', true)
    },100)

  }
};
