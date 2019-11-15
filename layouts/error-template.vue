<template>
  <div class="">
    <div class="alert alert-danger">
      <div class="container py-3">
        <img src="https://cdn.pixabay.com/photo/2013/04/01/10/55/attention-98643_960_720.png" class="float-left" alt="image attention">
        <h1 class="text-center">Oops!</h1>
        <!--
        <h2 v-if="error.statusCode === 404" class="text-center">Page non trouvée...</h2>
        -->
        <h2 class="text-center">Problème de rendu... désolé!</h2>
      </div>
    </div>
    <div class="text-right w-75">
      <nuxt-link to="/">Retour à l'accueil</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 8rem;
  }

</style>

