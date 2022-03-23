<template>
 <Auth/>

</template>

<script>
import Auth from 'components/Auth.vue'



import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Auth
  },


})
</script>
