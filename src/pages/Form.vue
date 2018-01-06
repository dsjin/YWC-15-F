<template>
  <div id="from">
      <div id="banner"></div>
      <div class="form container" style="padding-left:15%; margin-top:10%">
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ชื่อ-นามสกุล</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="ชื่อ-นามสกุล" style="width:50%">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">อายุ</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" placeholder="อายุ" style="width:50%">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ช่องทางการติดต่อ</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="ช่องทางการติดต่อ" style="width:50%">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ที่อยู่</label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" style="width:50%"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ความเป็นอยู่น้อง</label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" style="width:50%"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ความฝันน้อง</label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" style="width:50%"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <label class="col-sm-3 control-label" for="card-holder-name">ไฟล์รูปภาพ</label>
                <div class="col-sm-9">
                    <input type="file" class="form-control" style="width:50%"/>
                </div>
            </div>
        </div>
      </div>
      <button type="button" class="btn cicle-btn bg-yellow" @click="click()">ส่งข้อมูล</button>
      <v-dialog/>
  </div>
</template>
<script>
export default {
  name:"Form",
  methods:{
      click:function(){
          this.$modal.show('dialog',{
                title: 'เสร็จเรียบร้อย!',
                text:'ขอบคุณที่ร่วมใส่ใจและให้โอกาสเด็กกับเราท่านสามารถติดตามเด็กที่ได้โอกาสที่บทความ เราจะส่งอีเมล์กลับเมื่อเด็กได้รับโอกาสในแคมเปญที่เราจัดตั้งขอขอบคุณ',
                buttons: [
                {
                    title:"กลับสู่หน้าหลัก",
                    handler: () => { 
                        this.$router.push({'name':'Landing'})
                    }
                }]
            })
      }
  }
}
</script>
<style scoped>
    .cicle-btn {
        border-radius: 30px;
    }

    .bg-yellow {
        background-color: #FFCE6F;
    }
</style>

