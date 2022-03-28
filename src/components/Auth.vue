<template>
  <div v-if="start" class="AuthMain">
    <div class="AuthMain_container">
      <div class="AuthMain_container-title">
        <h4>LOGIN WITH GITHUB</h4>
      </div>

      <div class="AuthMain_container-signInGitHub">
          <button @click="signin" class="AuthMain_container-githubBtn">
            <span><img src="../assets/github-3215409-2673827.webp" alt=""></span>
            <span>войти c GitHub</span>
          </button>
      </div>
    </div>
  </div>
  <div v-if="!start" class="profile">
    <div class="profile_img">
      <img   :src="dataBase.avatar_url" alt="">
      <img v-if="!dataBase.avatar_url"  :src="dataBase.gravavatar_id" alt="">

    </div>
  <div class="profile_listInfo">
    <p v-if="!input">Имя - {{dataBase.name}}</p><input v-if="input" :value="dataBase.name" type="text"><button @click="edit">Edit</button>
    <p>Логин - {{dataBase.login}}</p>
    <p>Email адрес - {{dataBase.email}}</p>
    <p>Организация - {{dataBase.company}}</p>
    <p>Местоположение - {{dataBase.location}}</p>
    <p>Описание профиля - {{dataBase.bio}}</p>
    <a target="_blank" :href="dataBase.html_url">ссылка на профиль GitHub</a>
  </div>
    <button @click="check">CHECK</button>
  </div>

</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Auth',
  data () {
    return {
      start: true,
      dataBase: {},
      input: false


    }
  },
  props: {
    name: String
  },
  methods: {
    signin() {
      // Initializes OAuth.io with API key
      // Sign-up an account to get one
      window.OAuth.initialize('x0enh4S2lFy5J4HfC0kD2pw6yio');

      // Popup facebook and ask for authorization
      window.OAuth.popup('github').then((github) => {
        console.log('github:', github);
        this.start =false;
        // Prompts 'welcome' message with User's name on successful login
        // #me() is a convenient method to retrieve user data without requiring you
        // to know which OAuth provider url to call
        github.me().then((data) => {
          console.log("data: ", data);
          // this.$router.push('profile')
          // alert("Your Github email: " + data.email + ".\nCheck console logs for more info.");
        });

        // You can also call Github's API using #.get()
        github.get('/user').then(data => {
          this.dataBase = data
          console.log('self data:', data);
        });
      });
    },
    check () {
      console.log(this.dataBase)
    },
    edit () {
      this.input = true


    }

  }

})
</script>
