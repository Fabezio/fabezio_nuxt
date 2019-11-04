<template>
  <div class>
    <img
      id="logo"
      src="@/assets/img/bannière metal luisant.png"
      class="image is-fullwidth"
      alt
      style="width: 100%"
    />
    <div class="alert alert-info">
      <div class="notification is-outlined has-text-centered">
        <div class="container is-block">
          <h1 class="title is-1 is-centered">fabezio.fr</h1>
          <h2 class="subtitle is-2 is-center">Site CV de Développeur Web FrontEnd</h2>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <h2 class="text-center mb-4">Bienvenue sur ce site!</h2>
    
      <div class="text-justify ">
        <p>
          Si vous êtes ici, c'est que vous avez besoin d'un développeur web. J'ai envie de vous dire que vous êtes au bon endroit; ceci étant, vous avez forcément des réserves et avez besoin de preuves de mes compétences. C'est pourquoi tout est décrit ici.
        </p>
        <p>
          Je vous invite à prendre le temps de visiter ce site, consulter <a href="https://github.com/Fabezio/fabezio_nuxt" target="_blank">ma page github</a>, afin de vous forger votre propre avis. N'hésitez pas à me faire un retour <a href="mailto:fabezio@outlook.fr">par mail</a> et à tester plus avant mes acquis, éventuellement des suggestions (c'est grâce aux erreurs qu'on apprend et progresse).
        </p>
        <p>Sur ce, je vous souhaite une bonne visite!
          <!-- <i class="far fa-smile-wink p-0 m-0 fa-2x text-warning"></i> -->
          </p>
      </div>
    </div>
    <div class="container">
      <div class="loremipsum text-justify">
        <h2 class="text-center">lorem ipsum</h2>
        <p>Nostrud ipsum enim pariatur commodo ea. Aliqua ex nisi sint occaecat ea aliquip fugiat ut fugiat dolor proident ea ex non. Ex consectetur in irure excepteur anim consectetur pariatur excepteur excepteur.</p>
        <p>Id voluptate proident minim enim sunt in cupidatat. Laborum aliquip dolor ad elit in excepteur mollit qui nostrud sint. Excepteur proident et magna pariatur labore in velit officia culpa enim proident et. Commodo laborum labore veniam excepteur nulla consectetur elit non culpa deserunt non.</p>
        <p>Veniam veniam culpa consequat dolore nisi. Reprehenderit occaecat nisi excepteur eu voluptate duis nulla nisi. Voluptate mollit nulla minim adipisicing pariatur cillum culpa dolor velit dolore sit elit eiusmod magna. Magna nostrud excepteur quis magna est quis et ipsum. Nulla duis labore ipsum ipsum labore enim adipisicing aute ullamco excepteur velit consequat culpa.</p>
        <p>Do cupidatat laboris quis adipisicing aliqua ea adipisicing. Labore nisi quis fugiat sit adipisicing sint exercitation ullamco eiusmod fugiat ad excepteur officia ullamco. Labore dolor elit anim sunt adipisicing veniam pariatur anim ad sunt. Ex Lorem elit ipsum sint qui. Ullamco Lorem sint ea elit cillum laboris esse occaecat cillum esse nostrud quis Lorem. Ad eiusmod nulla duis reprehenderit velit reprehenderit ex in labore id.</p>
        <p>Lorem consectetur in qui id deserunt in nostrud voluptate culpa exercitation sunt deserunt nostrud. Duis dolore velit occaecat Lorem adipisicing commodo labore adipisicing et ex ea commodo nostrud. Ea in ad tempor fugiat laboris amet nisi officia in exercitation velit nulla aute. Elit voluptate minim elit tempor et et. Do aute et aliqua velit sint. Pariatur ex aliquip mollit aliquip nisi laboris sint voluptate.</p>
        <p>Commodo sit et magna excepteur excepteur pariatur pariatur. Velit aliqua nisi aliquip Lorem sit magna eu deserunt duis cillum ex sit. Non eiusmod sint adipisicing elit tempor laboris labore id ullamco quis enim Lorem cupidatat occaecat.</p>
        <p>
          Anim reprehenderit labore tempor dolore id officia do est id eiusmod eiusmod. Elit et aliquip occaecat nostrud anim do mollit consectetur cupidatat consequat esse proident incididunt sint. Nulla qui enim eu id quis magna do ut.
          Sint anim et ex minim amet labore exercitation. Sint qui non ad excepteur ea Lorem adipisicing ex aute do officia. Proident proident labore ipsum labore eu proident fugiat aliquip adipisicing Lorem ad Lorem sit. Exercitation velit et Lorem non laboris enim velit et amet veniam proident enim.
        </p>
        <p>
          Id pariatur in culpa occaecat consequat. Commodo deserunt et labore consectetur nulla cupidatat labore et ea voluptate quis. Nisi qui eu veniam ex velit minim fugiat magna incididunt tempor dolore. Mollit enim dolor amet elit reprehenderit.
          Enim cupidatat ipsum fugiat reprehenderit consectetur deserunt sunt dolore ea reprehenderit enim proident velit culpa. Occaecat consectetur quis amet ex proident id eu voluptate. Dolor nulla est sunt ullamco ut cupidatat officia cillum minim quis aliqua excepteur esse id. Labore nulla deserunt do adipisicing ex quis duis culpa ipsum cillum culpa.
        </p>
        <p>Cupidatat consectetur Lorem duis in irure cillum. Minim nostrud ea ea consequat labore cillum aliqua occaecat culpa incididunt ex amet non. Magna eu laborum eiusmod deserunt laboris dolor incididunt amet anim. Excepteur minim fugiat laborum eu laborum consectetur nulla Lorem pariatur consectetur exercitation elit do. Quis cillum ut tempor Lorem nostrud sunt ut anim consequat consequat magna ut. Occaecat adipisicing ullamco voluptate eiusmod cillum. Laboris ea sit nisi tempor velit incididunt exercitation sit anim labore consectetur magna.</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  layout: 'home',
  components: {
    // Logo
  }
};
</script>

<style scoped>
.loremipsum {
  padding: 1rem 0;
  margin: 1rem 0;
}
p {
  text-indent: 1rem;
}
p:first-letter {
  font-size: 1.25rem;
}
</style>
