<template>
  <div class="hello">

    <section class="vh-95 bg-green">
      <!-- <img class="img-box" src="../assets/larm-rmah-216854.jpg" width="100%" height="100%" alt="" srcset=""> -->
      <!-- <button style="position:absolute;left:80px;bottom:20%;">hello</button> -->
      <div class="img-box"></div>
      <div class="text-box font-cloud-bold">
        <h1 style="font-size:4em;marging-top:20%">"ความฝันของพวกหนู</h1>
        <h1 style="font-size:4em">ที่รอคอยการเติมเต็ม"</h1>
      </div>
      <div class="header-button-box">
        <button class="btn cicle-btn bg-yellow" @click="goto('/form')">แบ่งปัน</button>
        <button class="btn cicle-btn bg-yellow" style="margin-left: 15px;" @click="goto('campaign')">พบเด็กช่างฝัน</button>
      </div>
    </section>

    <section class="">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 ">
          <div class="container">
          <p class="text-center" style="font-size: 5rem;">Dreamand</p>
          <p class="text-center" style="font-size: 2rem">สานฝันสู่การให้ที่ยิ่งใหญ่</p>

          <p class="text-center">
          ดรีมมานด์.คอม เป็นเว็บไซต์สำหรับการช่วยเหลือเด็กที่มีความฝัน แต่ขาดโอกาสในการทำความฝันของตัวเอง โดยใช้วิธีการระดมทุน เพื่อนำเงินไปดำเนินการสร้างความฝัน ตามแต่ละอันความฝันที่น้องต้องการ
          </p>
        </div>
      </div>
        <div class="container">
        <div class="col-md-12 col-lg-12 col-sm-12">
            <div class="row">
              <div class="col-md-4">
                  <div class="card vertical-center" style="height:auto;">
                    <div class="card-body">
                      <p class="font-cloud-light" style="padding:0px">ยอดเงินบริจาคทั้งหมด</p>
                      <p class="font-card-p" style="padding:0px">144,000 บาท</p>
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                <div class="card vertical-center" style="height:auto;">
                  <div class="card-body">
                      <div class="font-cloud-light">ระยะเวลา</div>
                      <div class="font-card-p">123 วัน</div>
                      <!-- <h5 class="card-title">Card title</h5> -->
                      <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                <div class="card vertical-center" style="height:auto;">
                  <div class="card-body">
                    <div class="font-cloud-light">เด็กๆจำนวน</div>
                    <div class="font-cloud-light">998 คน</div>
                    <div class="font-card-p">ได้รับการสานฝันแล้ว</div>
                    <!-- <h5 class="card-title">Card title</h5> -->
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  </div>
              </div>
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
            <router-link :to="{ path: '/campaign/100' }">
              <div class="card" style="min-height:300px">
                <img class="card-img-top" src="../assets/IMG_8808.jpg" width="auto" height="150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title color-black">แคมเปญสานฝันอุปกรณ์ทางการศึกษา</h5>
                  <p class="card-text color-black">ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้</p>
                </div>
              </div>
            </router-link>

          </div>


          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
              <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
              <router-link :to="{ path: '/campaign/100' }">
                <div class="card" style="min-height:300px">
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
               <router-link :to="{ path: '/campaign/100' }">
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
          <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/blog/'+item }">
                <div class="card">
                  <div class="paino-img"></div> 
                            <!-- <img class="card-img-top" src="../assets/cook.jpeg" width="350" height="auto" alt="Card image cap"> -->
                          
                    <div class="card-body" style="margin-top:10px">
                    <h5 class="card-title" style="font-size:1em">ฝันที่เป็นจริง น้องเบลล์กับเครื่องดนตรีชิ้นโปรด</h5>
                    </div>
                  </div>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/blog/'+item }">
                <div class="card">
                  <div class="cook-img"></div> 
                            <!-- <img class="card-img-top" src="../assets/cook.jpeg" width="350" height="auto" alt="Card image cap"> -->
                          
                    <div class="card-body" style="margin-top:10px">
                    <h5 class="card-title" style="font-size:1em">ความคืบหน้าโครงการสนับสนุนให้เด็กได้เรียนต่อด้านทำอาหาร</h5>
                    </div>
                  </div>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <router-link :to="{ path: '/blog/'+item }">
                        <div class="card">
                            <div class="lang-img"></div>
                            <!-- <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap"> -->
                            <div class="card-body" style="margin-top:10px">
                                <h5 class="card-title" style="font-size:1em">ข้อความขอบคุณจากน้องมิ้นในโครงการส่งเสริมภาษา</h5>
                            </div>
                        </div>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
                    <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                    <router-link :to="{ path: '/blog/'+item }">
                        <div class="card">
                            <div class="study-img"></div>
                            <!-- <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap"> -->
                            <div class="card-body" style="margin-top:10px">
                                <h5 class="card-title" style="font-size:1em">ดำเนินการจัดโครงการคอมพิวเตอร์เพื่อการศึกษา</h5>
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

  h5{
    color: black
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
  .font-cloud-bold{
    font-family: Cloud-Bold;
  }
  .font-cloud-light{
    font-family: Cloud-light;
    font-size: 2em
  }
  .font-card-p{
    font-family: Cloud-bold;
    font-weight: bold;
    font-size: 2em;
    display: inline;
  }
  .cook-img {
    background-image: url("../assets/cook.jpeg");
    width: 100%;
    height: 150px;

    background-size: cover;
  }
  .study-img{
      background-image: url("../assets/study.jpeg");
      width: 100%;
      height: 150px;

      background-size: cover;
  }
  .lang-img{
     background-image: url("../assets/lang.jpeg");
    width: 100%;
    height: 150px;

    background-size: cover;
  }
  .paino-img{
    background-image: url("../assets/IMG_8803.jpg");
    width: 100%;
    height: 150px;

    background-size: cover;
  }
</style>