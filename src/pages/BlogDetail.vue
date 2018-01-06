<template>
    <div class="campaign-detail">
        <div class="detail-img">
            
        </div>

        <div class="campaign-content container">
            <h2>ฝันที่เป็นจริง น้องเบลล์กับเครื่องดนตรีชิ้นโปรด</h2>
            <div>
               <p>
                   น้องเบลล์ เด็กสาววัย 12 ขวบ ที่มีความฝันในการเล่นเปียโนมาตั้งแต่เด็ก ซึ่งทางดรีมมานด์.คอมได้ทำการระดมทุนเงินเพื่อซื้อเปียโนและอุปกรณ์การเล่นเปียโน พร้อมทั้งค่าจัดส่ง รวมมูลค่าคือ 35,000 บาท จากผู้บริจาคจำนวน 2,500 คน 
                    3 เดือนหลังจากที่เราดำเนินการ จัดส่งเรียบร้อย เราก็มีคลิปผลงานของน้องเบลล์ที่จะมาโชว์เล่นเปียโนเพลงเพราะๆเพื่อเป็นการขอบคุณทุกคนที่ช่วยสานฝันให้น้องเบลล์เป็นจริง
                </p>
                <p>
                    ทีมงานดรีมมานด์.คอมขอขอบคุณทุกน้ำใจของทุกคนที่หยิบยื่นมาช่วงสร้างความฝันของเด็กที่มีความฝันให้สำเร็จอีกครั้งนะคะ 
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DYhL9D6xDWI" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
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
            return {

            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .detail-img img {
        width: 100%;
    }
    .detail-img{
        background-image: url("../assets/piano.jpg");
        width: 100%;
        height: 600px;
        background-size: cover;
    }
</style>