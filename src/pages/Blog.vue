<template>
    <div id="campaign">

        
          <div class="row" id="campaignheader">
      <div class="campaignheader-img col-md-7 col-sm-6">
          <img src="../assets/IMG_8803.jpg" alt="thumbnail"/>
      </div>
      <div class="campaignheader-content col-md-5 col-sm-6">
          <h2>ฝันที่เป็นจริง น้องเบลล์กับเครื่องดนตรีชิ้นโปรด</h2>
          <p>
น้องเบลล์ เด็กสาววัย 12 ขวบ ที่มีความฝันในการเล่นเปียโนมาตั้งแต่เด็ก ซึ่งทางดรีมมานด์.คอมได้ทำการระดมทุนเงินเพื่อซื้อเปียโนและอุปกรณ์การเล่นเปียโน พร้อมทั้งค่าจัดส่ง รวมมูลค่าคือ 35,000 บาท จากผู้บริจาคจำนวน 2,500 คน 
3 เดือนหลังจากที่เราดำเนินการ จัดส่งเรียบร้อย เราก็มีคลิปผลงานของน้องเบลล์ที่จะมาโชว์เล่นเปียโนเพลงเพราะๆเพื่อเป็นการขอบคุณทุกคนที่ช่วยสานฝันให้น้องเบลล์เป็นจริง

ทีมงานดรีมมานด์.คอมขอขอบคุณทุกน้ำใจของทุกคนที่หยิบยื่นมาช่วงสร้างความฝันของเด็กที่มีความฝันให้สำเร็จอีกครั้งนะคะ 

</p>
            <button type="button" class="btn btn-primary" @click="goto('/blog/100')">ดูรายละเอียด</button>
      </div>
  </div>


        <div class="container">
            <h2 class="text-left">บทความ</h2>

            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                    <router-link :to="{ path: '/blog/'+item }">
                        <div class="card">
                            <div class="cook-img"></div> 
                            <!-- <img class="card-img-top" src="../assets/cook.jpeg" width="350" height="auto" alt="Card image cap"> -->
                          
                            <div class="card-body">
                                <h5 class="card-title">ความคืบหน้าโครงการสนับสนุนให้เด็กได้เรียนต่อด้านทำอาหาร</h5>
                            </div>
                        </div>
                    </router-link>
                    
                </div>

                      <div class="col-md-4 col-sm-6 col-xs-12">
                    <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                    <router-link :to="{ path: '/blog/'+item }">
                        <div class="card">
                            <div class="lang-img"></div>
                            <!-- <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap"> -->
                            <div class="card-body">
                                <h5 class="card-title">ข้อความขอบคุณจากน้องมิ้น ในโครงการส่งเสริมภาษา</h5>
                            </div>
                        </div>
                    </router-link>
                    
                </div>

                      <div class="col-md-4 col-sm-6 col-xs-12">
                    <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                    <router-link :to="{ path: '/blog/'+item }">
                        <div class="card">
                            <div class="study-img"></div>
                            <!-- <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap"> -->
                            <div class="card-body">
                                <h5 class="card-title">ดำเนินการจัดโครงการคอมพิวเตอร์เพื่อการศึกษา</h5>
                            </div>
                        </div>
                    </router-link>
                    
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
           <Footer/>
    </div>

</template>

<script>
import Footer from "@/components/Footer";
import CampaignHeader from "@/components/CampaignHeader";
export default {
  name: "Campaign",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    goto: function(path) {
      this.$router.push({ path: path });
    }
  },
  components: {
    Footer: Footer,
    CampaignHeader: CampaignHeader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cook-img {
  background-image: url("../assets/cook.jpeg");
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

.campaignheader-img,
.campaignheader-content {
  text-align: left;
}
.campaignheader-img img {
  width: 100%;
  height: 80%;
}
.campaignheader-content {
  margin-top: 6%;
}
</style>