<template>
  <div>
    <nav
      class="navbar has-text-centered has-background-dark has-text-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item has-text-light" to="/">Accueil</nuxt-link>
        <!-- <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>-->

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item has-text-light" to="/">Accueil</nuxt-link>
          <nuxt-link class="navbar-item has-text-light" to="/skills">Compétences</nuxt-link>
          <nuxt-link class="navbar-item has-text-light" to="/services">Services</nuxt-link>
          <nuxt-link class="navbar-item has-text-light" to="/contact">Contactez-moi!</nuxt-link>

          <!-- <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>-->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-info">
                <strong>Sign up</strong>
              </a>
              <a class="button is-link">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>