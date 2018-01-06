<template>
  <div class="row" id="campaignheader">
      <div class="campaignheader-img col-md-7 col-sm-6">
          <img src="../assets/IMG_8808.jpg" alt="thumbnail"/>
      </div>
      <div class="campaignheader-content col-md-5 col-sm-6">
          <h2>แคมเปญสานฝันอุปกรณ์ทางการศึกษาให้น้อง</h2>
          <p>ร่วมช่วยเหลือเด็กด้อยโอกาสเพื่อให้พวกเขาได้รับอุปกรณ์ทางการศึกษาเพื่อการเรียน และสนับสนุนการเรียนรู้</p>
          <p>อุปกรณ์ทางการศึกษาเป็นปัจจัยสำคัญที่ทำให้เด็กด้อยโอกาส มีกำลังใจเรียนต่อไปและสานฝันอาชีพที่อยากเป็น ถึงแม้ราคาของอุปกรณ์จะไม่แพงสำหรับบางคน แต่สำหรับพวกเขามีค่ามาก</p>
          <p>”คอมพิวเตอร์ทำให้สานฝันสิ่งที่ผมอยากเรียนต่อ”</p>
          <p>
เด็กชายนนทรี ตรีบุตร หรือน้องนน อายุ 15 ปี จากโรงเรียนคลองบ่อ จังหวัดศรีษะเกษ น้องนนมีความสนใจในด้านคอมพิวเตอร์มาตั้งแต่เด็ก และตั้งใจสอบเข้าวิศวะคอมพิวเตอร์เพื่อประกอบอาชีพที่ดีหาเงินมาเลี้ยงครอบครัวในวันข้างหน้า แต่น้องนนไม่มีทุนทรัพย์ที่เพียงพอ เพราะอยู่กันตามเพียงลำพังสองคนตายาย ที่มีรายได้วันละ 200 บาท
</p>
<p>มาร่วมเติมฝันให้น้องกัน</p>
            <button type="button" class="btn btn-primary" @click="goto('/campaign/100')">ดูรายละเอียด</button>
      </div>
  </div>
</template>
<script>
export default {
  name:'CampaignHeader',
  methods:{
      goto:function(path){
          this.$router.push({'path':path})
      }
  }
}
</script>
<style scoped>
    .campaignheader-img, .campaignheader-content {
        text-align: left;
    }
    .campaignheader-img img{
        width: 100%;
        height: 80%;
    }
    .campaignheader-content{
        margin-top: 6%
    }
</style>


