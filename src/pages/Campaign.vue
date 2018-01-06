<template>
    <div id="campaign">

        <campaign-header/>

        <div class="container" style="border:solid 1px;">
            <h2 class="text-left"> Head subject</h2>

            <div class="row">
                <div v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key="index" class="col-md-4 col-sm-6 col-xs-12">
                    <!-- <router-link :to="{ path: '/campaign' }" class="card"> -->
                    <router-link :to="{ path: '/campaign/'+item }">
                        <div class="card">
                            <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
</style>