import Vue from 'vue'

import {
  mapGetters
} from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters({
      issmallscreen: "issmallscreen",
      isxlscreen: "isxlscreen",
      screensize: "screensize",
    }),
  }
})
