<template>
  <header>
    

    <div class="wrapper">
      
        <Navbar :logo="logo_src" :alt="app_name" />
      
        <RouterView />
      
        <Footer />
    </div>
  </header>
 
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src : "/img/logo.png",
      app_name : "Make Your Burger"
    }
  }
}
</script>

<style lang="sass">
   *
    font-family: Arial, Helvetica, sans-serif
    padding: 0
    margin: 0
    box-sizing: border-box
    box-sizing: border-box
    margin: 0

  .wrapper
    width: 100%

    $primary-color: #3498db


  /* div.wrapper2
    display: flex
    flex-flow: row nowrap
    justify-content: center
    flex-shrink: 1 */

  /* .rota
    display: flex
    max-width: 1200px 
    margin: auto
    padding: 15px 50px
    background-color: #eee */

  /* .wrapper
    display: flex
    justify-content: center
    flex-flow: row wrap */

  /* .wrapper2 */ 
  

</style>
