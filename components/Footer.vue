<template>
  <div class>
    <footer class="d-block mx-auto mt-5 pt-2 pb-5 bg-green text-dark">
      <p class="text-center ">
        Tous droits réservés - fabezio.fr
        <span>&copy;</span> 2019
      </p>
      <nav class="navbar navbar-expand-lg justify-content-center navbar-light text-capitalize nav-pills">
      <ul class="navbar-nav  ">
        <li class="nav-item" v-for="link in links" :key="link.route">
          <nuxt-link class="nav-link" :to="link.route">
            <IconStack :faClass="link.icon" />

            <span class="route">{{link.name}}</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a
               class="nav-link"
                href="https://github.com/Fabezio/fabezio_nuxt"
                target="_blank"
              >
                  <IconStack faClass="fab fa-github-alt" />
                  <span class="route">
                  Mon code source

                  </span>
                
              </a>
        </li>
      </ul>
      </nav>
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
        },
        {
          route: "/faq",
          name: "foire aux questions",
          icon: "fas fa-question-circle"
        }
      ]
    };
  }
};
</script>

