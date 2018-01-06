<template>
    <div id="campaign">

        <div class="container">
            <campaign-header/>
        </div>

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
                  <h5 class="card-title color-black">แคมเปญสานฝันอุปกรณ์ทางการศึกษา</h5>
                  <p class="card-text color-black">ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้</p>
                </div>
              </div>
            </router-link>

          </div>


          <div class="col-md-4 col-sm-6 col-xs-12 color-black">
              <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
              <router-link :to="{ path: '/campaign/'+item }">
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
              <router-link :to="{ path: '/campaign/'+item }">
                <div class="card" style="min-height:300px">
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
           <Footer/>
    </div>

</template>

<script>
import Footer from '@/components/Footer'
    import CampaignHeader from '@/components/CampaignHeader'
    export default {
        name: "Campaign",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        },
        components: {
            "Footer":Footer,
            "CampaignHeader": CampaignHeader
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#campaign{
 margin-top:60px;   
}
</style>