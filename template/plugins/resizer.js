import _ from 'lodash'

export default ({
  store
}) => {
  const detectScreensize = () => {

    var mobileBreak = 768
    var tabletBreak = 1240
    var desktopBreak = 1920

    if (window.innerWidth < mobileBreak) {
      store.commit('SET_SCREENSIZEFORMAT', 'is-screen-s')
      // store.commit('SET_SMALLERMEDIUM', true)
    }
    if (window.innerWidth >= mobileBreak && window.innerWidth <= tabletBreak) {
      store.commit('SET_SCREENSIZEFORMAT', 'is-screen-m')
    }

    if (window.innerWidth >= tabletBreak && window.innerWidth <= desktopBreak) {
      store.commit('SET_SCREENSIZEFORMAT', 'is-screen-l')
    }

    if (window.innerWidth > desktopBreak) {
      store.commit('SET_SCREENSIZEFORMAT', 'is-screen-xl')
    }

    // store.commit('SET_SCREENSIZE', window.innerWidth)


  };

  detectScreensize();

  window.addEventListener('resize', _.debounce(detectScreensize, 100));

  window.setTimeout(function() {
    detectScreensize();
    store.commit('SET_APPINITIATED', true)
  }, 100)

};
