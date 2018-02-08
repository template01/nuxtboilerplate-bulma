<template>
<div class="mt-80 mb-80 mr-20 ml-20">
  redirecting
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp
  },

  data: function() {
    return {
    }
  },
  mounted(){
    var vm = this
    if (window.addEventListener) {
    	window.addEventListener("message", function(event){
        vm.$store.commit('SET_PREVIEWDATA', event.data)
      }, false);
    }
    else {
    	window.attachEvent("onmessage", function(event){
        vm.$store.commit('SET_PREVIEWDATA', event.data)
      });
    }
  },

  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
      previewData: "GET_PREVIEWDATA",
    }),
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {

    // 
    // // GET POSTS START
    // if (store.state.posts.length == 0) {
    //   const postsRes = await axios.get(store.state.apiRoot + '/posts')
    //   store.commit('SET_POSTS', postsRes.data)
    // }
    //
    // // RETURN DATA DIRECTLY
    // // return { title: 'blah blah blah' }


  },


}
</script>

<style>

</style>
