<template>
  <section class="container">
    <div>
      <div class="columns">
        <div class="column">
          <p class="is-size-1">
            nuxtboilerplate-bulma
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            screensize from store: {{screensize}}
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            app initated from store:
            {{appinitated}}
          </p>
        </div>
        <div class="column">
          <p class="is-size-3">
            <genericcomp></genericcomp>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp
  },
  computed: {
    ...mapGetters({
     appinitated: "getappinitated",
    }),
  }

}
</script>

<style>

</style>
