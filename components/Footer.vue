<template>
  <div class>
    <footer class="d-block mx-auto py-3 bg-primary text-dark font-weight-light">
      <b-nav type="dark" align="center" pils>
        <!-- elements principaux -->
        <b-nav-item class="nav-item nav-pill" v-for="link in links" :key="link.route">
          <nuxt-link class="nav-link" :to="link.route">
            <IconStack :faClass="link.icon" />
            <span class="route">{{link.name | capitalize({onlyFirstLetter: true}) }}</span>
          </nuxt-link>
        </b-nav-item>
        <b-nav-item href="https://github.com/Fabezio/fabezio_nuxt" target="_blank">
          <IconStack faClass="fab fa-github-alt" />
          <span class="route">Mon code source</span>
        </b-nav-item>
      </b-nav>
      <p class="text-center">
        Tous droits réservés - fabezio.fr
        <span>&copy;</span> 2019
      </p>
    </footer>
  </div>
</template>

<script>
import IconStack from "@/components/IconStack";
export default {
  name: "Footer",
  components: {
    IconStack
  },
  data() {
    return {
      links: [
        {
          route: "/map",
          name: "plan du site",
          icon: "far fa-map"
        },
        {
          route: "/cgu",
          name: "conditions",
          icon: "fas fa-file-contract"
        },
        {
          route: "/help",
          name: "aide",
          icon: "fas fa-question"
        }
        // {
        //   route: "/faq",
        //   name: "foire aux questions",
        //   icon: "fas fa-question-circle"
        // },
      ]
    };
  }
};
</script>
