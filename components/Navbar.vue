<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <nuxt-link class="navbar-brand" to="/">
        <img src="@/assets/favicon-32.png" class="logo" style="height: 32px" alt="logo" title="logo">
        fabezio.fr
      </nuxt-link>
      
      <button class="navbar-toggler" @click="toggleNavbar" id="menuButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"   ></span>
      </button>

      <div class="collapse navbar-collapse" :class="{'show':collapse}" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto text-center"  >
          <li class="nav-item" v-for="link in links" :key="link.route">
          <nuxt-link class="nav-link" :to="link.route">
              <i :class="link.icon" class="mr-1" > </i>
            
            {{link.name}}

          </nuxt-link>

          </li>
          <!-- <li class="nav-item active">

            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="displayDropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Autres
            </a>
            <div class="dropdown-menu" :class="{'show': dropdown}" aria-labelledby="navbarDropdown">
              <nuxt-link class="dropdown-item" to="/about"><i class="fas fa-comment-alt mr-1"> </i> Qui je suis</nuxt-link>
              <nuxt-link class="dropdown-item" to="/contact"><i class="fas fa-envelope mr-1"> </i> Contactez-moi</nuxt-link>
              <a class="dropdown-item" href="https://github.com/Fabezio/fabezio_nuxt">
              <hr class="my-1">
              <i class="fab fa-github mr-1"> </i>
              Mon code source</a>
              <!--
                
              <nuxt-link class="dropdown-item" to="/map">Plan du Site</nuxt-link>
              <nuxt-link class="dropdown-item" to="/help">Aide</nuxt-link>
              <nuxt-link class="dropdown-item" to="/faq">Foire aux Questions</nuxt-link>
              <nuxt-link class="dropdown-item" to="/cgu">Conditions</nuxt-link>
              -->
              
            </div>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> -->
          </li>
        </ul>
        <form class="form-inline my-2 ">
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
  // const menu = document.getElementById('navbarSupportedContent')
  // const button = document.getElementById('menuButton')
  // const dropdown = document.getElementById('navbarDropdown')
  // const menu = document.getElementById('navbarSupportedContent')
export default {
  name: "Navbar",
  data() {
    return {
      collapse: false,
      dropdown: false,
      signUser: true,
      logUser: false,
      links: [
        {
          route: '/',
          name: 'Accueil',
          icon: 'fas fa-home'
        },
        {
          route: '/services',
          name: 'Services',
          icon: 'fas fa-user-tie'
        },
        {
          route: '/skills',
          name: 'Compétences',
          icon: 'fas fa-user-graduate'
        },
        {
          route: '/portfolio',
          name: 'Portfolio',
          icon: 'fas fa-images'
        },
        {
          route: '/contact',
          name: 'Contactez-moi',
          icon: 'fas fa-envelope'
        },
        {
          route: '/about',
          name: 'A propos',
          icon: 'fas fa-comment-alt'
        },
      ],
      dropdownLinks : [
        {
          route: '',
          name: '',
          icon: ''
        }
      ],
      logs: [
        {
          name: 'subscribe',
          color: 'btn btn-info',
          name: "Inscription",
          icon: 'fas fa-user-plus',
          show: true

        },
        {
          name: 'login',
          color: 'btn btn-primary',
          name: "Connexion",
          icon: 'fas fa-sign-in-alt',
          show: true

        },
        {
          name: 'logout',
          color: 'btn btn-warning',
          name: "Déconnexion",
          icon: 'fas fa-sign-out-alt',
          show: true

        },
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.collapse = !this.collapse
      
    },
    toggleSignUser() {
      this.signUser = !this.signUser
      
    },
    toggleLogUser() {
      this.logUser = !this.logUser
      
    },
    displayDropdown() {
      this.dropdown = !this.dropdown
      
    },
  
    userbtn() {
      

    },
    isActive() {
      this.links = 'active'
    }
  }
};
</script>