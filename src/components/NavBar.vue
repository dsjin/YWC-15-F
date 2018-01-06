<template>
  <nav class="navbar navbar-toggleable-md fixed-top  navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

       <router-link class="navbar-brand" :to="{ path: '/' }"> 
        <img src="../assets/logo.png" width="50%" height="50%" alt="" srcset="">
       </router-link>
    

<div class="navbar-logo"></div>
    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/' }">หน้าแรก </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/campaign' }">แคมเปญทั้งหมด</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/blog' }">บทความ</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/aboutus' }">เกี่ยวกับเรา</router-link>
          </li>

          

      </ul>

    </div>
  </nav>
</template>
<script>
  export default {
    name: "Navbar"
  };
</script>
<style>

  .navbar-logo{
    width: 100%;
    height: 100%;
    background-image: url('../assets/logo.png');
    background-size: cover;
  }

  .navbar{
    box-shadow: 0 2px rgba(0, 0, 0, .1);
  }
</style>