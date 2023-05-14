<template>
  <div id="public">
    <MobileNav/>
  </div>
      <router-view />
  <Footer/>
</template>

<script>
import MobileNav from './components/MobileNav.vue'
import Footer from './components/Footer.vue'
export default {
  name : 'App',
  components : {
    MobileNav, Footer
  }
}
</script>


<style lang="scss">

</style>
