<template>
  <div id="portfolio" class="">
    <h1 class="text-center mb-4 header-shadow">Portfolio</h1>
    <article>
      <h2 class="header-shadow mb-3">Sites créés en formation:</h2>
      <div class="card-deck">
        <div
          v-for="creation in creations"
          :key="creation.mod"
          class="card silver-shadow text-center"
        >
          <img
            class="card-img-top"
            data-toggle="modal"
            :data-target="'#' + creation.mod"
            :src="creation.img"
            :alt="creation.alt"
          />

          <div class="card-body">
            <h3 class="card-title text-uppercase">{{creation.name}}</h3>
            <p class="card-text display-5">{{creation.desc}}</p>
          </div>
          <div class="card-footer mb-0">
            <a
              :href="'https://' + creation.url"
              target="_blank"
              class="btn btn-outline-link display-5 text-uppercase"
            >
              <i class="fas fa-sign-in-alt"></i>
              Consulter
            </a>
          </div>
        </div>
      </div>
      <div
        v-for="creation in creations"
        :key="creation.mod"
        class="modal collapse fade"
        :id="creation.mod"
      >
        <div class="modal-dialog modal-md">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class>{{creation.name}}</h4>
              <button class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <img class="w-100" :src="creation.img" />
            </div>
            <div class="modal-footer">
              <div class="btn-group btn-lg btn-rounded">
                <button class="btn btn-dark" data-dismiss="modal">
                  <i class="mr-1 far fa-window-close text-danger text-light"></i> Annuler
                </button>
                <a :href="'https://' + creation.url" target="_blank" class="btn btn-success">
                  <i class="mr-1 fas fa-sign-in-alt"></i> Aller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      path: "~/assets/img/portfolio",
      creations: [
        {
          url: "voyages.fabezio.com",
          img: "https://cv.fabezio.com/img/voyage.png",
          mod: "voyage",
          alt: "photo du site",
          name: "Travel Agency",
          desc: "Premier site en HTML / CSS"
        },
        {
          url: "snake.fabezio.com",
          img: "http://cv.fabezio.com/img/snake-maj.png",
          mod: "snake",
          alt: "photo du site",
          name: "Snakey",
          desc: "Version JS de Snake"
        },
        {
          url: "actrices.fabezio.com",
          img: "http://cv.fabezio.com/img/actrices.png",
          alt: "photo du site",
          mod: "actrices",
          name: "Top 5 Actrices",
          desc: "Site en jQuery"
        }
      ]
    };
  }
  /*
        
    */
};
</script>

<style scoped>
#portfolio .card img {
  filter: grayscale(100%);
  opacity: 0.75;
}
#portfolio .card img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
.card-body {
  border-top: aquamarine 1.5px solid;
}
</style>