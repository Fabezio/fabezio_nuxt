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
    <nuxt class="container my-5" />
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
