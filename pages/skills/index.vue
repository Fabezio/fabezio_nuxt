<template>
  <div id="skills" class>
    <h1 class="text-center my-5 header-shadow">Formations</h1>
    <div v-for="code in codes" :key="code.title">
      <h2 class="mt-5 mb-4 text-center header-shadow">{{code.title}}</h2>
      <div class="card-deck my-4">
        <div
          v-for="card in code.content"
          :key="card.name"
          class="card rounded-lg bg-transparent silver-shadow text-center"
        >
          <div class="card-header">
            <img :src="card.img" alt class="card-top-img w-100" />
            <h6 class="text-right text-muted mt-2 float-right">
              <em>v{{card.version}}</em>
            </h6>
          </div>
          <div class="card-body">
            <!-- <i :class="card.class" class="fa-10x mt-2 card-img-top " ></i> -->
            <p class="card-text">{{card.desc}}</p>
          </div>
          <h4 class="card-footer mb-0">{{card.name}}</h4>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <p class="text-muted">
        * La version supportée dépend du navigateur
        <!-- <br> ** Actuelle: 13 (à fins de test) -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data: () => {
    return {
      codes: [
        {
          title: "Classique",
          content: [
            {
              name: "HTML",
              version: 5.2,
              img:
                "https://juststickers.in/wp-content/uploads/2014/05/HTML5-Mark-Shape-Cut.png",
              desc: "Langage de balisage dédié au contenu du site"
            },
            {
              name: "CSS",
              version: 3,
              img:
                "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
              desc: "Feuilles de style pour la mise en forme des pages"
            },
            {
              name: "JavaScript",
              img:
                "http://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png?t=636356437130000000",

              version: "1.8 *",
              desc: "Langage de programmation, dynamise l'application"
            }
            // {

            //   name: "Node-JS",
            //   img:
            //     "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
            //   version: '12.13 (LTS)**',
            //   desc: "Librairie JavaScript appliquée aux serveurs"
            // }
          ]
        },
        {
          title: "Style",
          content: [
            {
              name: "Bootstrap",
              version: 4.3,
              img:
                "http://www.dxpdance.com.au/wp-content/uploads/2016/03/bootstrap-logo.jpg",
              desc: "Framework CSS facilitant la mise en forme"
            },
            {
              name: "Bulma",
              version: 0.8,
              img: "https://jgthms.com/web-design-in-4-minutes/bulma.png",
              desc: "Framework semblable à BootStrap"
            },
            {
              name: "Sass",
              version: 1.22,
              img:
                "http://www.freelogovectors.net/wp-content/uploads/2019/02/sass-logo.png",
              desc: "Framework servant à la personnalisation CSS"
            }
          ]
        },
        {
          title: "Dynamisation Frontend",
          content: [
            {
              name: "React",
              version: 16.11,
              img:
                "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
              desc: "Framework JS facilitant la création des sites web"
            },
            {
              name: "Vue JS",
              version: 2.6,
              img:
                "http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png",
              desc: "Semblable à React, en plus simple et complet"
            },
            {
              name: "Nuxt",
              version: "2.10",
              img:
                "https://cosmic-s3.imgix.net/9af92d20-31d0-11e8-b24f-2f60c3c01c65-nuxtjs-cosmicjs.png",
              desc: "Framework utilisant VueJS pour des applis universelles "
            }
          ]
        },
        {
          title: "Autres",
          content: [
            {
              name: "Git",
              img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/768px-Git_icon.svg.png",
              version: 2.23,
              desc: "Application servant à versionner ses codes"
            },
            {
              name: "gitHub",
              img: "http://pngimg.com/uploads/github/github_PNG40.png",
              version: 2.23,
              desc: "Le cloud des codeurs, basé sur git"
            },
            {
              name: "Python",
              version: 3.7,
              img:
                "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
              desc:
                "Langage de programmation, plébiscité en Big Data et Machine Learning"
            }
          ]
        }
      ]
    };
  }
  /*
        
    */
};
</script>

<style scoped>
</style>