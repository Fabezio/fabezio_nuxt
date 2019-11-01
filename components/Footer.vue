<template>
    <div class="">
      <footer class="bg-dark text-light d-block mx-auto mt-5 pt-2 pb-5"  >
        
        <p class="text-center">
          Tous droits réservés fabezio.fr
          <span>&copy;</span> 2019
        </p>
        <ul class="nav justify-content-start">
          <li class="nav-item" v-for="link in links" :key="link.route">
            <nuxt-link  class="nav-link" :to="link.route">
              <i :class="link.icon"> </i>
              {{link.name}}</nuxt-link>
            <!-- <a class="nav-link active" href="#">Active</a> -->
          </li>
          
          <li class="nav-item">
            <!-- <nuxt-link class="nav-link" to="/cgu">Conditions</nuxt-link> -->
            <!-- <a class="nav-link" href="#">Link</a> -->
            <a class="nav-link" href="https://github.com/Fabezio/fabezio_nuxt">
              <i class="fab fa-github"> </i>
              Mon code source</a>
          </li>
          <li class="nav-item">
            <!-- <nuxt-link class="nav-link" to="/help">Aide</nuxt-link> -->
            <!-- <a class="nav-link" href="#">Link</a> -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
          </li>
        </ul>
        <nav class="navbar justify-content-center">
        </nav>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      links: [
        {
          route: '/map',
          name: 'Plan du site',
          icon: 'far fa-map'
        },
        {
          route: '/cgu',
          name: 'Conditions',
          icon: 'fas fa-file-contract'
        },
        {
          route: '/help',
          name: 'Aide',
          icon: 'fas fa-question'
        },
      ]
    }
  }
};
</script>

