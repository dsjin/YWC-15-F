<template>
  <div class="hello">

    <section class="vh-95 bg-green">
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

    <section class="">
      <div class="container row">
        <div class="col-md-6">
          <p class="text-left" style="font-size: 5rem">Dreamand</p>
          <p class="text-left" style="font-size: 2rem">สานฝันสู่การให้ที่ยิ่งใหญ่</p>

          <p class="text-left">
              dreamand.com (ดรีมมานด์.คอม) พวกเราคือกลุ่มคนที่รวมตัวกันเป็นสื่อกลางระหว่างเยาวชนที่มีความฝัน แต่ไม่มีโอกาสในการสานความฝันของตัวเอง และกลุ่มคนที่มีความต้องการที่จะบริจาคทุนทรัพย์เป็นการกุศล

              เราคัดเลือกน้องๆอย่างไร?
              
              เยาวชนที่ทางทีมงานคัดเลือกมาจะเป็นเยาวชนที่มีความฝันที่อยากจะทำอะไรบางอย่าง เช่นเด็กชายเอ มีความฝันอยากเป็นนักฟุตบอล แต่ไม่ได้รับโอกาสในการฝึกเตะฟุตบอลเพราะขาดแคลนทุนทรัพย์ เด็กชายเอมีพฤติกรรมที่ดี เป็นที่ชื่นชมของคนรอบตัว พวกเราจึงจะทำการนำเรื่องราวของเด็กชายเอมาบอกต่อให้ทุกคนได้รับรู้ผ่านเว็บไซต์ ดรีมมานด์.ดอม เพื่อทำการระดมทุนนำเงินไปซื้ออุปกรณ์กีฬาให้เด็กชายเอ
          </p>
        </div>
        <div class="col-md-6">

          <div class="container">

            <div class="card vertical-center" style="height:31vh;">
              <div class="card-body">
                <p style="padding:0px">ยอดเงินบริจาคทั้งหมด</p>
                <p style="padding:0px">144,000 บาท</p>
              </div>
            </div>


            <div class="card vertical-center" style="height:31vh;">

              <div class="card-body">
                <div>ระยะเวลา</div>
                <div>123 วัน</div>
                <!-- <h5 class="card-title">Card title</h5> -->
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              </div>
            </div>

            <div class="card vertical-center" style="height:31vh;">
              <div class="card-body">
                  <div>เด็กๆจำนวน</div>
                  <div>998 คน</div>
                  <div>ได้รับการสานฝันแล้ว</div>
                <!-- <h5 class="card-title">Card title</h5> -->
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section style="margin-top:10px;margin-bottom:50px;">
      <div class="container">
        <h1 class="text-left" style="margin-top:10px">แคมเปญที่น่าสนใจ</h1>
        <div class="row">
          <div v-for="(item,index) in [1,2,3]" :key="index" class="col-md-4 col-sm-6 col-xs-12">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/campaign/'+item }">
              <div class="card">
                <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>

          </div>
        </div>
      </div>

      <div class="container">
        <h1 class="text-left" style="margin-top:10px">บทความ</h1>
        <div class="row">
          <div v-for="(item,index) in [1,2,3,4]" :key="index" class="col-md-3 col-sm-6 col-xs-12">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/campaign/'+item }">
              <div class="card">
                <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </router-link>

          </div>
        </div>
      </div>

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
        this.$router.push({ 'path': path })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vertical-center {
    height: 90px;
    line-height: 90px;
    text-align: center;
  }

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

  .vh-95 {
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