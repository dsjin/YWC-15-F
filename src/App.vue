<template>
  <div id="app">
    <Navbar/>
    <div class="app-body">
      <test/>
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import CampaignHeader from './components/CampaignHeader'
  export default {
    name: 'app',
    components: {
      "Navbar": Navbar,
      "test": CampaignHeader
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
    margin-top: 60px;
  }
</style>