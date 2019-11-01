<template>
    <div class="">
      <footer class="bg-dark text-light d-block mx-auto mt-5 pt-2 pb-5"  >
        <p class="text-center">
          Tous droits réservés fabezio.fr&trade;
          <span>&copy;</span> 2019
        </p>
        <nav class="navbar justify-content-center">
          <nuxt-link to="/map">Plan du site</nuxt-link>
          <nuxt-link to="/cgu">Conditions</nuxt-link>
          <nuxt-link to="/help">Aide</nuxt-link>
        </nav>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

