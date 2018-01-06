<template>
    <div class="campaign-detail">
        <div class="detail-img container">
             <img class="img-fluid" src="../assets/IMG_8808.jpg" alt="thumbnail"/>
            <!-- 350 150 -->

            <div class="detail-progress">
                เติมเต็มฝันไปแล้ว
                <div class="progress detail-progress-bar">
                    <div class="progress-bar" style="width:60%">60%</div>
                </div>
            </div>

        </div>

        <div class="campaign-content container">
            <h2>แคมเปญสานฝันอุปกรณ์ทางการศึกษาให้น้อง</h2>
            <div>
                 <p>ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้</p>
          <p>อุปกรณ์ทางการศึกษาเป็นปัจจัยสำคัญที่ทำให้เด็กด้อยโอกาส มีกำลังใจเรียนต่อไปและสานฝันอาชีพที่อยากเป็น</p>
          <p>ถึงแม้ราคาของอุปกรณ์จะไม่แพงสำหรับบางคน แต่สำหรับพวกเขามีค่ามาก</p>
          <p>”คอมพิวเตอร์ทำให้สานฝันสิ่งที่ผมอยากเรียนต่อ”</p>
          <p>
เด็กชายนนทรี ตรีบุตร หรือน้องนน อายุ 15 ปี จากโรงเรียนคลองบ่อ จังหวัดศรีษะเกษ น้องนนมีความสนใจในด้านคอมพิวเตอร์มาตั้งแต่เด็ก และตั้งใจสอบเข้าวิศวะคอมพิวเตอร์เพื่อประกอบอาชีพที่ดีหาเงินมาเลี้ยงครอบครัวในวันข้างหน้า แต่น้องนนไม่มีทุนทรัพย์ที่เพียงพอ เพราะอยู่กันตามเพียงลำพังสองคนตายาย ที่มีรายได้วันละ 200 บาท
</p>
<p>มาร่วมเติมฝันให้น้องกัน</p>
            </div>
            <div class="text-right">
                <!-- <button type="button" class="btn"><a [routerLink]="['/sent']"></a>DONATE DREAMER</a></button> -->
                <!-- <button type="button" class="btn">DONATE DREAMER</button> -->
                <button class="btn btn-default" @click="getDonate()">
                        <!-- <router-link :to="{ path: '/campaign'}">DONATE DREAMER</router-link> -->
                        DONATE DREAMER
                </button>
               
            </div>
        </div>

        <section>

            <div class="container">
              
                 <section style="margin-top:10px;margin-bottom:50px;">
      <div class="container">
        <h1 class="text-left" style="margin-top:10px">แคมเปญที่น่าสนใจ</h1>
        <div class="row">
      

          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
            <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
            <router-link :to="{ path: '/campaign/'+item }">
              <div class="card" style="min-height:300px">
                <img class="card-img-top" src="../assets/IMG_8808.jpg" width="auto" height="150" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title color-black">แคมเปญสานฝันอุปกรณ์ทางการศึกษาให้น้อง</h5>
                  <p class="card-text color-black">ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้</p>
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


    </section>

            </div>

        </section>


    </div>
</template>

<script>
export default {
  name: "CampaignDetail",
  data() {
    return {};
  },
  methods: {
    getDonate: function() {
      this.$router.push({ name: "Donate" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-img img {
  /* width: 80%; */
  height: 500px;
}
</style>