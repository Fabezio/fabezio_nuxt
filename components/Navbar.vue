<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-capitalize nav-pills fixed-top">
      <nuxt-link class="navbar-brand home"  to="/">
        <img
          src="@/assets/favicon-32.png"
          class="logo"
          style="height: 32px"
          alt="logo"
          title="logo"
        />
        fabezio.fr
      </nuxt-link>

      <button
        class="navbar-toggler"
        id="menuButton"
        type="button"
        @click="toggleNavbar"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" :class="{'show':collapse}" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item nav-pill" v-for="link in links" :key="link.route">
            <nuxt-link class="nav-link" :to="link.route">
              <IconStack :faClass="link.icon" />
              <!-- <span class="fa-stack fa-1x fa-fw">
                <i class="far fa-circle fa-stack-2x fa-fw teal-circle"></i>
                <i :class="link.icon" class="fa-stack fa-fw fa-inverse"></i>
              </span>-->
              <span class="route">{{link.name}}</span>
            </nuxt-link>
          </li>
          <!-- <li class="nav-item active">

            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>-->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              @click="displayDropdown"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <IconStack faClass="fas fa-plus" />Autres
            </a>
            <div
              class="dropdown-menu bg-dark text-dark"
              :class="{'show': dropdown}"
              aria-labelledby="navbarDropdown"
            >
              <div v-for="link in dropdownLinks" :key="link.route">
                <nuxt-link class="nav-link" :to="link.route">
                  <IconStack :faClass="link.icon" />

                  <span class="route">{{link.name}}</span>
                </nuxt-link>
              </div>

              <hr class="my-1" />
              
            </div>
          </li>
        </ul>
        <form class="form-inline my-2">
          <!-- <div class="" v-for="log in logs" :key="log.name" > 
          <button class="ml-2" :class="log.color"><i :class="log.icon"> </i> {{log.name}}</button>
        </div>
          <a v-show="true" @click="toggleSignUser" :class="{'show': signUser}" id="signup" role="button" class="btn btn-info">
            
              <i class="fas fa-user-plus"> </i>
              Inscription
          </a>
          <button  @click="toggleSignUser" id="login" :class="{'show': signUser}" role="button" class="btn btn-primary mx-2">
              <i class="fas fa-sign-in-alt"> </i>
            Connexion</button>
          <a id="logout" @click="toggleLogUser" :class="{'show': logUser}" role="button" class="btn btn-warning">
              <i class="fas fa-sign-out-alt"> </i>
            Déconnexion</a>
          -->

          <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
          <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        </form>
      </div>
    </nav>
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
      collapse: false,
      dropdown: false,
      signUser: true,
      logUser: false,
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
        }
      ],
      dropdownLinks: [
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
    toggleNavbar() {
      this.collapse = !this.collapse;
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
    }
  }
};
</script>