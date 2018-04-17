<template>
<div class="mt-80 mb-80 mr-20 ml-20">
  <div v-if="appinitated" class="container">
    <div >
      <div class="columns">
        <div class="column">
          <p class="is-size-3 has-text-success">
            nuxt-boilerplate-bulma
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            screensize from store:
            <span v-html="$mq"></span>
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            app initated from store:
            <span v-html="appinitated"></span>
          </p>
        </div>
        <div class="column">
          <genericcomp></genericcomp>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <postlistcomp></postlistcomp>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <div>
      <div class="columns">
        <div class="column">
          <p class="is-size-3 has-text-danger">
            Loading
          </p>
        </div>
      </div>
    </div>
  </div>
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
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
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


    // GET POSTS START
    // if (store.state.posts.length == 0) {
    //   const postsRes = await axios.get(store.state.apiRoot + '/posts')
    //   store.commit('SET_POSTS', postsRes.data)
    // }

    // RETURN DATA DIRECTLY
    // return { title: 'blah blah blah' }


  },


}
</script>

<style>

</style>
