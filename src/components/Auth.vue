<template>
  <div class="AuthMain">
    <div class="AuthMain_container">
      <div class="AuthMain_container-title">
        <h3>Войдите в свой аккаунт</h3>
      </div>
      <div class="AuthMain_container-login">
        <p class="AuthMain_container-firstTitle">Введите email</p>
        <input type="text" class="AuthMain_container-input" placeholder="логин">
      </div>
      <div class="AuthMain_container-password">
        <p class="AuthMain_container-firstTitle">Введите пароль</p>
        <input type="password" class="AuthMain_container-input" placeholder="пароль">

      </div>
      <div class="AuthMain_container-signInGoogle">
          <button class="AuthMain_container-googleBtn">
            <span><img src="../assets/google.svg" alt=""></span>
            <span>войти через Google</span>
          </button>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Auth',

})
</script>
