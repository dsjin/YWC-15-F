<template>
    <div id="donate" class="container">
        <div class="first-time" v-if="this.firsttime">
            <div class="row">
                <div class="col-sm-12 center">
                    <div class="card" style="padding-top:10%;padding-bottom:10%">
                        <div class="card-body">
                            <h3>รบกวนผู้ใจบุญรายใหม่</h3>
                            <h3>ล็อกอินเพื่อสิทธิพิเศษที่เราจะมอบให้นะคะ</h3>
                            <div class="form-group" style="margin-top:2%">
                                <div class="row">
                                    <label class="col-sm-3 control-label" for="card-holder-name">Email</label>
                                    <div class="col-sm-9">
                                        <input type="email" class="form-control" placeholder="youremail@email.com" style="width:50%">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" style="margin-top:2%">
                                <div class="row">
                                    <label class="col-sm-3 control-label" for="card-holder-name">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" class="form-control" placeholder="Password" style="width:50%">
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" @click="loginClick()">Facebook</button>
                            <button type="button" class="btn btn-primary" @click="loginClick()">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="payment" v-else>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card" style="padding-top:10%;padding-bottom:10%">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h3>แคมเปญ ： 123</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>จำนวนเงิน</p>
                                </div>
                                <div class="group1 col-sm-12" style="margin-bottom:2%">
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button1 },{'btn-secondary': !show.button1}]" @click="changeActive('button1')">50 บาท</button>
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button2 },{'btn-secondary': !show.button2}]" @click="changeActive('button2')">100 บาท</button>
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button3 },{'btn-secondary': !show.button3}]" @click="changeActive('button3')">300 บาท</button>
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button4 },{'btn-secondary': !show.button4}]" @click="changeActive('button4')">500 บาท</button>
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button5 },{'btn-secondary': !show.button5}]" @click="changeActive('button5')">1000 บาท</button>
                                    <button type="button" class="btn" :class="[{ 'btn-primary': show.button6 },{'btn-secondary': !show.button6}]" @click="changeActive('button6')">อื่นๆ</button>
                                </div>
                            </div>
                            <div class="group2">
                                <div v-show="show.button6">
                                    <div class="form-group">
                                        <div class="row">
                                            <label class="col-sm-3 control-label" for="card-holder-name">อื่นๆ</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control" placeholder="จำนวนเงิน (บาท)" style="width:50%">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label" for="card-holder-name">ชื่อผู้ถือบัตร</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="card-holder-name" id="card-holder-name" placeholder="ชื่อผู้ถือบัตร">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label" for="card-number">หมายเลขบัตรเครดิต</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="card-number" id="card-number" placeholder="หมายเลขบัตรเครดิต">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                    <label class="col-sm-3 control-label" for="expiry-month">วันหมดอายุ</label>
                                    <div class="col-sm-9">
                                    <div class="row" style="margin-left: 0;">
                                        <div class="col-xs-3">
                                        <select class="form-control" name="expiry-month" id="expiry-month">
                                            <option>เดือน</option>
                                            <option value="01">Jan (01)</option>
                                            <option value="02">Feb (02)</option>
                                            <option value="03">Mar (03)</option>
                                            <option value="04">Apr (04)</option>
                                            <option value="05">May (05)</option>
                                            <option value="06">June (06)</option>
                                            <option value="07">July (07)</option>
                                            <option value="08">Aug (08)</option>
                                            <option value="09">Sep (09)</option>
                                            <option value="10">Oct (10)</option>
                                            <option value="11">Nov (11)</option>
                                            <option value="12">Dec (12)</option>
                                        </select>
                                        </div>
                                        <div class="col-xs-3">
                                        <select class="form-control" name="expiry-year">
                                            <option value="18">2018</option>
                                            <option value="19">2019</option>
                                            <option value="20">2020</option>
                                            <option value="21">2021</option>
                                            <option value="22">2022</option>
                                            <option value="23">2023</option>
                                            <option value="23">2024</option>
                                            <option value="23">2025</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <label class="col-sm-3 control-label" for="cvv">หมายเลข CVV</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="cvv" id="cvv" placeholder="Security Code">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <button type="button" class="btn btn-primary" @click="onClick()">Donate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog/>
    </div>
</template>

<script>
export default {
  name: 'Donate',
  data () {
      return {
          firsttime:true,
          show:{
              button1:true,
              button2:false,
              button3:false,
              button4:false,
              button5:false,
              button6:false
          }
      }
  },
  methods:{
      loginClick: function(){
          this.firsttime = false
      },
      changeActive: function(button){
          this.show["button1"] = false
          this.show["button2"] = false
          this.show["button3"] = false
          this.show["button4"] = false
          this.show["button5"] = false
          this.show["button6"] = false
          this.show[button] = true
      },
      onClick:function() {
            this.$modal.show('dialog',{
                title: 'ขอขอบคุณ!',
                text:'ขอขอบคุณท่านผู้ใจบุญท่านสามารถอ่านเรื่องราวของเด็กท่านอื่นที่ได้รับการช่วยเหลือได้ใน บทความโอกาสครั้งนี้จะส่งผลให้เด็กคนนึงเติบโตไปอย่างมีประสิทธิภาพได้ในวันข้างหน้า',
                buttons: [{
                    title:"แชร์",
                    handler: () => { 
                        alert('แชร์แล้ว!') 
                        this.$router.push({'name':'Landing'})
                    }
                },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
