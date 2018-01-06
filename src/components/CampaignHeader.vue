<template>
  <div class="row" id="campaignheader">
      <div class="campaignheader-img col-md-7 col-sm-6">
          <img src="http://via.placeholder.com/500x400" alt="thumbnail"/>
      </div>
      <div class="campaignheader-content col-md-5 col-sm-6">
          <h2>Campaign</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
              , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident
              , sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button type="button" class="btn btn-primary" @click="goto('/campaign/100')">Primary</button>
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


