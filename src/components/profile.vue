<template>
<div>
  ascksbcjsqbcaKScblascbkaSc
  <div  class="profile">
    <div class="profile_img">
      <img   :src="dataBase.avatar_url" alt="">
      <img v-if="!dataBase.avatar_url"  :src="dataBase.gravavatar_id" alt="">

    </div>
    <div class="profile_listInfo">
      <p v-if="!input">Имя - {{nameModel}}</p>

      <input style="width: 300px"
             v-if="input"
             v-model="nameModel"
             v-on:blur="blurInput"
             type="text">



      <button @click="edit">Edit</button>
      <p>Логин - {{dataBase.login}}</p>
      <p>Email адрес - {{dataBase.email}}</p>
      <p>Организация - {{dataBase.company}}</p>
      <p>Местоположение - {{dataBase.location}}</p>
      <p>Описание профиля - {{dataBase.bio}}</p>
      <a target="_blank" :href="dataBase.html_url">ссылка на профиль GitHub</a>
    </div>
    <button >CHECK</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      input: false,
      dataBase: {},
      nameModel: null
    }
  },
  methods: {
    edit() {
      this.input = true
    },
    blurInput() {
      this.input = false;

    },
  },
  created() {
      console.log(this.datas, 'NEWWWW')

  },
  computed: {
    datas () {
      return this.$store.getters["example/DATA_GETTER_NAME"]
    }
  },

}
</script>

<style scoped>

</style>
