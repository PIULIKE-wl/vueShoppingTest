<template>
   <div class="fir">
     <div class="topimage">
     <el-carousel :interval="4000" type="card" height="500px">
         <el-carousel-item v-for="item in store.state.goods" :key="item.id">
       <!-- <h3 class="medium">{{ item }}</h3> -->
         <img :src="item.photo" >
     </el-carousel-item>
     </el-carousel>
     </div>
     <div class="list1">
       <div class="listTitle">今日商品</div>
      <div class="list2" v-for="item in store.state.goods" :key="item.id">
        <div>
          <img :src="item.photo">
          <button @click="pushShoppingCar(item)">加入购物车</button>
        </div>
        <span>{{item.name}}</span>
      </div>
     </div>
   </div>
</template>

<script>
import { ref,reactive,computed,watch } from "vue";
import { useStore } from "vuex";
export default {
    name:'mainPage',
    setup() {
        const store = useStore();
        //将物品放入购物车
        function pushShoppingCar(item){
          if(item.isInCar){
            alert("该商品已经在购物车中了！")
          }else{
            store.commit('pushShoppingCar',item.id);
            alert("加入购物车成功！")
          }
          // console.log(x)
        }

        return {
            store,
            pushShoppingCar
        }

    }

}
</script>

<style >
.fir{
  width: 1200px;
}
.el-carousel__item img {
    width: 100%;
    height: 100%;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .topimage{
    width: 80%;
    margin: 0 auto;
  }
  .list1{
    width: 1200px;
    height: 900px;
    margin: 0 auto;
    background: #00000080;

  }
  .listTitle{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: blueviolet;
    font-size: 26px;
    color: cornsilk;
    text-shadow: 0 0 5px; 

  }
  .list2{
    width: 253px;
    height: 256px;
    margin-top: 50px;
    margin-left: 38px;
    /* border: 1px solid red; */
    float: left;
    
  }
 .list2 div{
   width: 100%;
   height: 86%;
   position: relative;
   overflow: hidden;
   
 }
 .list2 div img{
   width: 100%;
   height: 100%;
 }
 .list2 span{
   display: inline-block;
   width: 100%;
   height: 32px;
   margin-top: 4px;
   line-height: 32px;
   text-align: center;
   color: wheat;
   border-radius: 15px;
   background-color: red;
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
   
 }
 .list2 div:before{
    content: '';
    position: absolute;
    width: 112px;
    height: 220px;
    top: 0;
    left: 20px;
    background-image: linear-gradient(to right,rgba(255,255,255,.2) 0,rgba(255,255,255,.5) 50%,rgba(255,255,255,.2) 100%);/*linear-gradient渐变效果*/
    transform: skewX(-25deg);
 }
 .list2 div:hover:before{
    transition: left 1s;
    left: 220px;
 }
 .list2:hover img{
   width: 130%;
   height: 130%;
   margin-top: -15%;
   margin-left: -15%;
   transition:all 1s;
 }
 .list2 div:hover button{
   transition: all 0.5s;
   top:168px;
 }
 .list2 div button{
   position: absolute;
   top: 222px;
   left: 62px;
   height: 40px;
   width: 114px;
   border-radius: 20px;
   border: 0;
   color: rgb(244, 243, 245);
   background-image: linear-gradient(to right, #bd00de 0%, #ff5100 100%);
 }
 .list2 div button:hover{
   background-image: linear-gradient(to right, #620a72 0%, #923c14 100%);
 }
</style>