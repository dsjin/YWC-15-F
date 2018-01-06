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
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12 ">
          <div class="container">
          <p class="text-left" style="font-size: 5rem">Dreamand</p>
          <p class="text-left" style="font-size: 2rem">สานฝันสู่การให้ที่ยิ่งใหญ่</p>

          <p class="text-left">
          ดรีมมานด์.คอม เป็นเว็บไซต์สำหรับการช่วยเหลือเด็กที่มีความฝัน แต่ขาดโอกาสในการทำความฝันของตัวเอง โดยใช้วิธีการระดมทุน เพื่อนำเงินไปดำเนินการสร้างความฝัน ตามแต่ละอันความฝันที่น้องต้องการ
          </p>
        </div>
      </div>
        <div class="col-md-6 col-lg-6 col-sm-12">

          <div class="">

            <div class="card vertical-center" style="height:auto;">
              <div class="card-body">
                <p style="padding:0px">ยอดเงินบริจาคทั้งหมด</p>
                <p style="padding:0px">144,000 บาท</p>
              </div>
            </div>


            <div class="card vertical-center" style="height:auto;">

              <div class="card-body">
                <div>ระยะเวลา</div>
                <div>123 วัน</div>
                <!-- <h5 class="card-title">Card title</h5> -->
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              </div>
            </div>

            <div class="card vertical-center" style="height:auto;">
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
      

          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/campaign/'+item }">
              <div class="card"style="min-height:300px">
                <img class="card-img-top" src="../assets/photo-1465659398573-cc071d2531d0.jpg" width="auto" height="150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title color-black">ดนตรีเป็นยารักษาจิตใจที่ดีที่สุด</h5>
                  <p class="card-text color-black">สุขภาพจากการเล่นรถจักรยานเพื่อน้องเป็นสิ่งสำคัญที่จะทำให้สุขภาพของเด็กดีขึ้นถือเป็นการช่วยเหลือด้านจิตใจ</p>
                </div>
              </div>
            </router-link>

          </div>


          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
              <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
              <router-link :to="{ path: '/campaign/'+item }">
                <div class="card"style="min-height:300px">
                  <div class="div">
                      <img class="card-img-top" src="../assets/photo-1486280380840-0531135d75af.jpg" width="100%" height="150" alt="Card image cap">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title color-black">สุขภาพเท้าสำหรับเด็กเหมือนสุขภาพใน</h5>
                    <p class="card-text color-black">สุขภาพจากการเล่นรถจักยานเพื่อน้องถือเป็นสิ่งสำคัญที่จะทำให้สุขภาพของเด็กดีขึ้น</p>
                  </div>
                </div>
              </router-link>
  
            </div>

            
          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
              <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
              <router-link :to="{ path: '/campaign/'+item }">
                <div class="card"style="min-height:300px">
                  <img class="card-img-top" src="../assets/rodolfo-mari-81201.jpg" width="auto" height="150" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title color-black">สุขภาพจากการเล่นรถจักรยานเพื่อน้อง</h5>
                    <p class="card-text color-black">สุขภาพจากการเล่นรถจักยานเพื่อน้องถือเป็นสิ่งสำคัญที่จะทำให้สุขภาพของเด็กดีขึ้นถือเป็นการช่วยเหลือด้าน</p>
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
                <img class="card-img-top" src="../assets/photo-1465659398573-cc071d2531d0.jpg"  width="auto" height="150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">ปะแป้งเด็กเก็บเห็ด ที่ได้รับโอกาสจากแคมเปญ</h5>
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
        msg: 'Welcome to Your Vue.js App',
        campaigns: [
          {
            imgsrc: '../assets/photo-1486280380840-0531135d75af.jpg',
            title: 'title1',
            text: 'text1'
          },
          {
            imgsrc: '../assets/photo-1486280380840-0531135d75af.jpg',
            title: 'title1',
            text: 'text1'
          },
          {
            imgsrc: '../assets/photo-1486280380840-0531135d75af.jpg',
            title: 'title1',
            text: 'text1'
          }
        ]
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
  .color-black{
    color:black!important;
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