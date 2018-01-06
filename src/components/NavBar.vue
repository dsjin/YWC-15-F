<template>
  <nav class="navbar navbar-toggleable-md fixed-top  navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Logo</a>

    <div class="collapse navbar-collapse container" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/' }">หน้าแรก </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/campaign' }">แคมเปญทั้งหมด</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/' }">บทความ</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/' }">ติดต่อ</router-link>
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
  .navbar{
    box-shadow: 0 2px rgba(0, 0, 0, .1);
  }
</style>