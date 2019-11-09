<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-emerald" sticky>
      <b-navbar-brand>
        <nuxt-link class="btn btn-lg btn-gold home text-lowercase" to="/">
          <img
            src="@/assets/favicon-32.png"
            class="logo"
            style="height: 32px"
            alt="logo"
            title="logo"
          />
          fabezio.fr
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- elements principaux -->
        <b-nav pills>
          <b-nav-item class="font-weight-light" v-for="link in links" :key="link.route">
            <nuxt-link class="nav-link" :to="link.route">
              <IconStack :faClass="link.icon" />
              <span class="route">{{link.name | capitalize({onlyFirstLetter: true}) }}</span>
            </nuxt-link>
          </b-nav-item>
        </b-nav>

        <!-- elements à droite -->
        <b-navbar-nav>
          <!-- menu deroulant -->
          <b-navbar-item-dropdown text="Autres" right>
            <b-dropdown-item>
              <div v-for="link in dropdownLinks" :key="link.route">
                <nuxt-link class="nav-link" :to="link.route">
                  <IconStack :faClass="link.icon" />

                  <span class="route">{{link.name}}</span>
                </nuxt-link>
              </div>
            </b-dropdown-item>
          </b-navbar-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import IconStack from "@/components/IconStack";
// import NavLinks from '@/components/'
// const menu = document.getElementById('navbarSupportedContent')
// const button = document.getElementById('menuButton')
// const dropdown = document.getElementById('navbarDropdown')
// const menu = document.getElementById('navbarSupportedContent')
export default {
  name: "Navbar",
  components: {
    IconStack
  },
  data() {
    return {
      navCollapse: false,
      dropdown: false,
      // signUser: true,
      // logUser: false,
      links: [
        {
          route: "/",
          name: "accueil",
          icon: "fas fa-home"
        },
        {
          route: "/services",
          name: "services",
          icon: "fas fa-user-tie"
        },
        {
          route: "/skills",
          name: "compétences",
          icon: "fas fa-user-graduate"
        },
        {
          route: "/portfolio",
          name: "portfolio",
          icon: "fas fa-images"
        },
        {
          route: "/contact",
          name: "contactez-moi",
          icon: "fas fa-envelope"
        },
        {
          route: "/about",
          name: "à propos",
          icon: "fas fa-comment-alt"
        }
      ],
      dropdownLinks: [],
      logs: [
        {
          name: "subscribe",
          color: "btn btn-info",
          name: "Inscription",
          icon: "fas fa-user-plus",
          show: true
        },
        {
          name: "login",
          color: "btn btn-primary",
          name: "Connexion",
          icon: "fas fa-sign-in-alt",
          show: true
        },
        {
          name: "logout",
          color: "btn btn-warning",
          name: "Déconnexion",
          icon: "fas fa-sign-out-alt",
          show: false
        }
      ]
    };
  },
  methods: {
    navbarToggle() {
      this.navCollapse = !this.navCollapse;
    },
    toggleSignUser() {
      this.signUser = !this.signUser;
    },
    toggleLogUser() {
      this.logUser = !this.logUser;
    },
    displayDropdown() {
      this.dropdown = !this.dropdown;
    },

    userbtn() {},
    isActive() {
      this.links = "active";
    },
    brandToHelp() {
      return this.$router.push("/help");
    }
  }
};
</script >

<style >
.navbar-brand {
  text-shadow: 2px 2px 2px grey;
}
.route {
  color: darkslategray;
  text-shadow: 1px 1px 1px grey;
}
</style>