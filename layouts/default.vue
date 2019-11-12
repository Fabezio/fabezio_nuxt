<template>
  <div>
    <Navbar />
    <!-- <div class="">
      <p class="text-center">Intéressé? cliquez ici &rarr;
        <a href="static/docs/cv.pdf" class="btn btn-link">
          
          Voir
          </a>
      </p>
    </div>-->
    <nuxt class="container my-5 pb-5" />
    <Footer />
  </div>
</template>

<script>
// import pdf from 'vue-pdf';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style >

p {
  text-align: justify;
}
.media-img {
  width: 128px;
  height: 128px;
}
#my-card {
  vertical-align: middle;
  border: none;
  transition: none;
}
.btn-gold {
  background: gold;
}
.bg-green {
  background: green;
}

.bg-emerald {
  background: #50c878;
}
.bg-turquoise {
  background: aquamarine;
}
.bg-jade {
  background: #00a86b;
}
.far,
.fas {
  margin: 0 !important;
}
.bg-transparent {
  background: rgba (0, 0, 0, 0.25) !important;
}
.bg-teal {
  background: #008080;
}
.teal-circle {
  color: #008080;
}
.bg-bluesky {
  background: skyblue;
}
/* .card-img-top img {
  max-height: 213px !important;
  min-height: 213px !important;
  height: auto !important;
  max-width: 213px !important;
  width: auto !important;
} */
.card {
  border: 1px solid aquamarine;
}
.card:hover {
  transform: scale(1.15);
  transition: all 0.25s ease-in-out !important;
  cursor: pointer;
}

.card-body {
  border-top: 1px solid aquamarine;
  border-bottom: 1px solid aquamarine;
}

.card-footer {
  background: aquamarine;
  color: #5c5c5c;
  text-shadow: 0.5px 0.5px darkslateblue;
}

.card-img-top {
  background: whitesmoke;
  padding: 7px;
}

.route:hover {
  text-decoration: darkslategrey underline !important;
}

.nuxt-link-exact-active .fa-circle {
  color: white;
}

.nuxt-link-exact-active:not(.home) {
  background: #00a86b !important;
  color: darkslategrey !important;
}
.nuxt-link-active .nav-icon {
  color: whitesmoke !important;
}
/*

.fab.route:active,
.fas.route:active,
.nuxt-link-exact-active .this-fa,
.navbar-brand {
  color: white !important;
  
}
.nav-link {
  color: silver !important;
}
*/
/* .nav-tabs :active {
    background: whitesmoke;
  } */
</style>