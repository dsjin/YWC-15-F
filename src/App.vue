<template>
  <div id="app">
    <Navbar/>
    <div class="app-body">
      <router-view/>
    </div>
       <!-- <Footer/> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components:{
    "Navbar": Navbar,
    "Footer": Footer
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  button {
    cursor: pointer;
  }

  .app-body {
    margin-top: 55px;
  }
</style>