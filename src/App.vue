<template>
 <!-- <Top/> -->
 <login/>
 <!-- <ShoppingCar/> -->
</template>

<script>
// import ShoppingCar from './components/shoppingcar.vue'
import login from './components/login.vue'
import axios from 'axios'
// import MainPage from './components/mainPage.vue'
export default {
  name: 'App',
  components: {
    login
  },
  // mounted() {
  //   axios.get('/api/userinfo').then(res=>{
  //     console.log(res.data)
  //   })
  // },
}
</script>

<style>

</style>
