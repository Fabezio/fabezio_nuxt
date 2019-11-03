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
    <nuxt class="py-5" />
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
.bg-transparent {
background: rgba (0,0,0,0.25) !important;
}
.bg-teal {
  background: #008080;
}
.bg-bluesky {
  background: skyblue;
}
.card-img-top img {
  max-height: 213px !important;
  min-height: 213px !important;
  height: auto !important;
  max-width: 213px !important;
  width: auto !important;
}
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
  color: #733;
  /* text-shadow: 1px 1px black, -1px -1px black; */
}

.card-img-top {
  background: whitesmoke;
  padding: 7px;
}

  /*
.navbar-brand {
  color: white !important;
  
}
.nav-link {
  color: silver !important;
}
.nav-link:hover.route {
  text-decoration: white underline !important;
}
.nav-link:selected.route,
.nav-link:active.route {
  text-decoration: white underline !important;
  color: white !important; 
}
*/
  /* .nav-tabs :active {
    background: whitesmoke;
  } */
</style>