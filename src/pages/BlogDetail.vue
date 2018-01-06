<template>
    <div class="campaign-detail">
        <div class="detail-img">
            <img src="http://via.placeholder.com/350x150" alt="">
        </div>

        <div class="campaign-content container">
            <h2>Title of Campaign</h2>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate cumque distinctio reprehenderit blanditiis corporis,
                inventore molestiae debitis praesentium! Quod ut veniam exercitationem sunt earum cupiditate maiores sint
                consequatur nulla excepturi.
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
</style>