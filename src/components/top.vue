<template>
   <div class="title">
        <button class="topLeft" @click="showMainPage">主页</button>
        商城
        <button class="topRight" @click="showShoppingCar">购物车</button>
    </div>
    <router-view></router-view>
</template>

<script>
import ShoppingCar from './shoppingcar.vue'
import MainPage from './mainPage.vue'
import {useRouter} from "vue-router";

export default {
    name:'Top',
    components: {
    MainPage,
    ShoppingCar
  },
  setup() {
      const router = useRouter();

      function showMainPage(){
          router.push({name:'mainPage'})//跳转到主页
      };
      function showShoppingCar(){
          router.push({name:'shoppingCar'})//跳转到购物车
      };


      return{
          router,
          showMainPage,
          showShoppingCar
      }
  },
    mounted() {
        const router = useRouter();
        router.push({name:'mainPage'});
    }
   }
</script >

<style>
    .topLeft,.topRight{
        height: 51px;
        width: 177px;
        border: 0px;
        background-color: rgb(201, 100, 226);
        font-size: 26px;
        color: cornsilk;
        text-shadow: 0 0 5px; 
    }
    .topLeft{
        float: left;
    }
    .topRight{
        float: right;
    }
    .topLeft:hover{
        background-color: rgb(177, 61, 61);
    }
    .topRight:hover{
        background-color: rgb(177, 61, 61);
    }
    .title{
           height: 51px;
           width: 100%;
           background-color: rgb(201, 100, 226);
           text-align: center;
           line-height: 51px;
           font-size: 40px;
           color: cornsilk;
           text-shadow: 0 0 5px ;
       }
</style>