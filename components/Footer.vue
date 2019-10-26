<template>
  <div>
    <footer class="footer has-text-centered has-background-dark has-text-light">
      <div class="content">
        <p>
          fabezio.com
          <span>&copy;</span> 2019
        </p>
        <nav
          class="navbar has-text-centered has-background-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-menu">
            <div class="navbar-start">
              <nuxt-link class="navbar-item has-text-light" to="/map">Plan du Site</nuxt-link>
              <nuxt-link class="navbar-item has-text-light" to="/help">Aide</nuxt-link>
              <nuxt-link class="navbar-item has-text-light" to="/faq">Foire aux Questions</nuxt-link>
              <nuxt-link class="navbar-item has-text-light" to="/about">Qui je suis</nuxt-link>

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
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>