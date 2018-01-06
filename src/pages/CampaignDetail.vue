<template>
    <div class="campaign-detail">
        <div class="detail-img container">
             <img class="img-fluid" src="../assets/glenn-carstens-peters-203007.jpg" alt="thumbnail"/>
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
              ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้

อุปกรณ์ทางการศึกษาเป็นปัจจัยสำคัญที่ทำให้เด็กด้อยโอกาส มีกำลังใจเรียนต่อไปได้ ถึงแม้ราคาของอุปกรณ์จะไม่แพงสำหรับบางคน แต่สำหรับพวกเขามีค่ามาก


”คอมพิวเตอร์ทำให้สานฝันสิ่งที่ผมอยากเรียนต่อ”
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
                <h2>SUGGEST</h2>

                <div class="row">
                    <div v-for="item in [1,2,3]" class="col-md-4 col-sm-6 col-xs-12">
                        <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                        <router-link :to="{ path: '/campaign/'+item }">
                            <div class="card">
                                <img class="card-img-top" src="http://via.placeholder.com/320x258" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
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