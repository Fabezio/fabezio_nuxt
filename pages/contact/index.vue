<template>
  <div class="">
    <h1 class="title text-center">Contactez-moi!</h1>
    <form action="" @submit.prevent="sendForm">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text far fa-user" id="basic-addon1"></span>
        </div>
        <input id="lastname" type="text" class="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text far fa-user" id="basic-addon1"></span>
        </div>
        <input id="firstname" type="text" class="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text far fa-building" id="basic-addon1"></span>
        </div>
        <input id="society" type="text" class="form-control" placeholder="Entreprise" aria-label="Enreprise" aria-describedby="basic-addon1">
      </div>
      <!-- <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text fas fa-phone-rotary" id="basic-addon1"></span>
        </div>
        <input id="tel" type="telephone" class="form-control" placeholder="Téléphone" aria-label="Téléphone" aria-describedby="basic-addon1">
      </div> -->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text far fa-envelope" id="basic-addon1"></span>
        </div>
        <input id="email" type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
      </div>
      
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text far fa-comment-dots" id="basic-addon1"></span>
        </div>
        <textarea id="message" type="email" class="form-control" placeholder="Message" rows="3" aria-label="Message" aria-describedby="basic-addon1"></textarea>
      </div>
      <!--
      <input type="text"  placeholder="Votre nom: " class="form-control my-2">
      <input type="text"  placeholder="Raison sociale: " class="form-control my-2">
      <div class="form-control">
      <input type="tel" id="phone" placeholder="Votre n° de téléphone: " class="">
      <input type="email" id="email" placeholder="Votre adresse mail: " class="">

      </div>
      <textarea name="message" id="message" cols="container" rows="3"></textarea>
      -->
      <input type="submit" class="btn-lg rounded-lg btn-warning btn-block" value="Envoyer">
    </form>
  </div>
</template>