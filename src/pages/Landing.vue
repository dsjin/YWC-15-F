<template>
  <div class="hello">

    <section class="vh-90 bg-green">
      <!-- <img class="img-box" src="../assets/larm-rmah-216854.jpg" width="100%" height="100%" alt="" srcset=""> -->
      <!-- <button style="position:absolute;left:80px;bottom:20%;">hello</button> -->
      <div class="img-box"></div>
      <div class="text-box">
        <h1>"ความฝันของพวกหนู</h1>
        <h1>ที่รอคอยการเติมเต็ม"</h1>
      </div>
      <div class="header-button-box">
        <button class="btn cicle-btn bg-yellow" @click="goto('/form')">แบ่งปัน</button>
        <button class="btn cicle-btn bg-yellow" style="margin-left: 15px;" @click="goto('campaign')">พบเด็กช่างฝัน</button>
      </div>
    </section>

    <section class="vh-90 bg-red">

    </section>


    <section class="vh-90">

    </section>


  </div>
</template>

<script>
  export default {
    name: 'Landing',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      goto: function (path) {
        this.$router.push({ 'path': path})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-box {
    position: absolute;
    bottom: 50%;
    color: white;
    text-align: center;
    width: 100%;
    font-weight: 700;
  }

  .img-box {
    width: 100%;
    height: 100%;
    background-image: url('../assets/larm-rmah-216854.jpg');
    background-size: cover;
  }

  .header-button-box {
    display: flex;
    position: absolute;
    justify-content: center;
    left: 50%;
    right: 50%;
    text-align: center;
    bottom: 10%;
  }

  .cicle-btn {
    border-radius: 30px;
  }

  .bg-yellow {
    background-color: #FFCE6F;
  }

  .bg-red {
    background: red;
  }

  .bg-green {
    background: green;
  }

  .vh-90 {
    height: 95vh
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>