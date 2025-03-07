<template>
  <v-app>
    <app-bar />
    <v-main>
      <View class="pb-16"/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import AppBar from './AppBar.vue'
  import View from './View.vue'
  import Footer from './Footer.vue'

  export default {
    components: {
      AppBar,
      View,
      Footer,
    }
  }
</script>

<script>

</script>
