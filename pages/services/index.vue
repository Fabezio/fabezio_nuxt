<template>
  <div id="services" class="">
    <h1 class="text-center mb-4 header-shadow">Services</h1>
    <div class="card-deck my-4">
      <div v-for="service in services" :key="service.id" class="card silver-shadow">
        <h2 class="card-header">{{service.title}}</h2>
        <div class="card-body">
          <p class="card-text text-justify">{{service.paragraph}}</p>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-md-12">
        <a
          href="#"
          class="btn btn-lg btn-block btn-primary text-light btn-shadow"
        >Oui, je demande une création/amélioration de site web</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data: () => {
    return {
      services: [
        {
          id: "create",
          title: "Création",
          paragraph:
            "Besoin d'un site web? Vous êtes au bon endroit. Tout sera fait pour répondre à vos besoins."
        },
        {
          id: "adapt",
          title: "Adaptation",
          paragraph:
            "Si votre site manque de réactivité ou est mal supporté par les navigateurs, alors il est urgent de le remettre au goût du jour."
        },
        {
          id: "optimize",
          title: "Optimisation",
          paragraph:
            "Vous avez un site web mais il ne s'affiche pas correctement sur votre smartphone ou tablette? Rendez-le responsive! De cette façon, vous l'adapterez à tous les supports numériques, fixes ou mobiles, et même pour les écrans TV!"
        }
      ]
    };
  }
  /*
        
    */
};
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px 5px 0 0;
  /*
  */
}
.carousel-indicators {
  width: 1rem;
  height: 1rem;
}
</style>