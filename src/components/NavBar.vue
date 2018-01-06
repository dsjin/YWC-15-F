<template>
  <nav class="navbar navbar-toggleable-md fixed-top  navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Logo</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <router-link class="nav-link" :to="{ path: '/' }">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Campaigne</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
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