<template>
<div>
    <div class="main">
        <ul class="list">
            <li id="guide">
                <span style="margin-left: 73px;">商品图片</span>
                <span style="margin-left: 134px;">商品名</span>
                <span style="margin-left: 115px;">单价</span>
                <span style="margin-left: 80px;">数量</span>
                <span style="margin-left: 136px;">操作</span>
            </li>
            <li v-for="(p,index) in showGoods" :key="p.id">
                <div class="check">
                    <input type="checkbox" name="check" v-model="showGoods[index].isCheck">
                </div>
                <div class="picture">
                    <a href="good1.html"><img :src="p.photo"></a>
                </div>
                <div class="name">{{p.name}}</div>
                <div class="price"><span>￥</span><span name="price">{{p.price}}</span></div>
                <div class="control">
                    <button name="minus" @click="p.number--">-</button>
                    <input type="text" v-model="showGoods[index].number" name="number">
                    <button name="plus" @click="p.number++">+</button>
                </div>
                <div class="delete">
                    <button name="delete" @click="deleteGood(index)">删除该商品</button>
                </div>
            </li>
            <!-- <li>
                <div class="check">
                    <input type="checkbox" name="check">
                </div>
                <div class="picture">
                    <a href="good3.html"><img src="../assets/phone1.jpg"></a>
                </div>
                <div class="name">苹果iPhone X苹果xr全新国行xs max正品8plus手机</div>
                <div class="price"><span>￥</span><span name="price">1399</span></div>
                <div class="control">
                    <button name="minus">-</button>
                    <input type="text" value="1" name="number">
                    <button name="plus">+</button>
                </div>
                <div class="delete">
                    <button name="delete">删除该商品</button>
                </div>
            </li>
            <li>
                <div class="check">
                    <input type="checkbox" name="check">
                </div>
                <div class="picture">
                    <a href="good2.html"><img src="../assets/watch1.jpg"></a>
                </div>
                <div class="name">正品DW-11手表小绿表皮带防水石英表超薄</div>
                <div class="price"><span>￥</span><span name="price">238</span></div>
                <div class="control">
                    <button name="minus">-</button>
                    <input type="text" value="1" name="number">
                    <button name="plus">+</button>
                </div>
                <div class="delete">
                    <button name="delete">删除该商品</button>
                </div>
            </li>
            <li>
                <div class="check">
                    <input type="checkbox" name="check">
                </div>
                <div class="picture">
                    <a href="good4.html"><img src="../assets/pad1.jpg"></a>
                </div>
                <div class="name">新款Apple/苹果 iPad Air4代（第四代）10.9英寸正品国行ipadair4</div>
                <div class="price"><span>￥</span><span name="price">3498</span></div>
                <div class="control">
                    <button name="minus">-</button>
                    <input type="text" value="1" name="number">
                    <button name="plus">+</button>
                </div>
                <div class="delete">
                    <button name="delete">删除该商品</button>
                </div>
            </li>
            <li>
                <div class="check">
                    <input type="checkbox" name="check" >
                </div>
                <div class="picture">
                    <a href="good5.html"><img src="../assets/pc1.jpg"></a>
                </div>
                <div class="name">ROG/玩家国度 魔霸新锐2021 魔霸5Plus R9/RTX3070游戏笔记本电脑</div>
                <div class="price"><span>￥</span><span name="price">8349</span></div>
                <div class="control">
                    <button name="minus">-</button>
                    <input type="text" value="1" name="number">
                    <button name="plus">+</button>
                </div>
                <div class="delete">
                    <button name="delete">删除该商品</button>
                </div>
            </li> -->
        </ul>
    </div>
    <div class="pay">
        <div class="sum">
            <span>总价格：</span>
            <span id="priceSum" class="sumPrice">{{sumPrice}}</span>￥
        </div>
        <div class="checkAll">
            <input type="checkbox" id="checkAll" v-model='isAll'>全选
        </div>
        <div class="paying">
            <button id="payment">结算</button>
            <div class="by">
                <span>感谢您的惠顾,欢迎下次光临！</span>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import { ref,reactive,computed,watch } from "vue";
import { useStore } from "vuex";
export default {
    name:'ShoppingCar',
    setup() {

        const store = useStore();
        let showGoods = reactive(store.state.goods.filter(item => item.isInCar));//取出放在购物车里商品以显示在页面

        let sumPrice = computed(()=>{
            let sum=0;
            for(let i=0;i<showGoods.length;i++)
            {
                if(showGoods[i].isCheck)
                {
                    if(showGoods[i].number>=0)
                    {
                        sum+=showGoods[i].price*showGoods[i].number;
                    }
                }
            }
            return sum
        })
        //计算那些商品被勾选
        let isAll = computed({
            get(){
                let isChecking = showGoods.filter(item=>item.isCheck == true);
                return isChecking.length == showGoods.length
            },
            set(value){
                 for(let i=0;i<showGoods.length;i++)
                {
                    showGoods[i].isCheck = value;
                }
                console.log("asasas")
            }
        })
        //删除购物车里的商品
        let deleteGood = function(index){
            store.commit('deletegd',showGoods[index].id);
            showGoods.splice(index,1);
        }


        return {
            store,
            showGoods,
            deleteGood,
            sumPrice,
            isAll
        }
    }

}
</script >

<style>
      *{
            margin: 0;
            padding: 0;
            list-style: none;
        }
       body{
            background:url('../assets/bg.jpg');
    	    background-repeat:no-repeat;
    	    background-size:100% auto;
       }
       /* .title{
           height: 51px;
           width: 100%;
           background-color: rgb(201, 100, 226);
           text-align: center;
           line-height: 51px;
           font-size: 40px;
           color: cornsilk;
           text-shadow: 0 0 5px ;
       } */
       .main{
           margin: 0 auto;
           width: 1000px;
           border:1px solid #00000080 ;
           background: #00000080;
       }
       .list{
            /* border:2px solid red ; */
            width: 800px;
            margin: 0 auto;
       }
       .list li{
           display: flex;
           width: 820px;
           height: 200px;
           /* border:2px solid red ; */
           margin-top: 20px;
           margin-bottom: 20px;
            background-color: cornsilk;
            transition: all 1s;
            overflow: hidden;
       }
       #guide{
        width: 801px; 
        height: 30px;
        background: #00000010;
        color: cornsilk;
       }
       .check{
           height: 200px;
           line-height: 200px;
           text-align: center;
           margin-left: 10px;
       }
       .picture{
           height: 160px;
           width: 160px;
           padding: 20px;
       }
       .picture img{
           height: 150px;
           width: 150px;
       }
       .name{
        height: 80px;
        width: 200px;
        text-align: center;
        padding: 60px 0;
       }
       .price{
        height: 200px;
        width: 100px;
        text-align: center;
        line-height: 200px;
       }
       .control{
           height: 200px;
           width: 150px;
           text-align: center;
           line-height: 200px;
       }
       .control input{
           height: 15px;
           width: 40px;
           padding: 4px 0;
           text-align: center;
       }
       .control button{
           height: 25px;
           width: 25px;
           border: 0;
           background-image: linear-gradient(to right, #bd00de 0%, #ff5100 100%);
           color: #fff;
           transition: all 0.2s;
       }
       .control button:hover{
           border-radius: 12px;
           color: black;
       }
       .delete{
           height: 200px;
           width: 200px;
           text-align: center;
           line-height: 200px;
       }
       .delete button{
           height: 30px;
           width: 130px;
           border: 0;
           color: #fff;
           background-image: linear-gradient(to right, #bd00de 0%, #ff5100 100%);
            transition: all 0.2s;
       }
       .delete button:hover{
           height: 50px;
            width: 150px;
           border-radius: 25px;
           color: black;
       }
       .pay{
           width: 100%;
           height: 163px;
           background-color: rgb(231, 87, 116);
       }
       .sum{
        height: 40px;
        text-align: center;
        line-height: 40px;
       }
       .sumPrice{
        font-size: 34px;
        color: cornsilk;
        text-shadow: 0 0 5px;
       }
       .paying{
           height: 40px;
           width: 80px;
           overflow: hidden;
           text-align: center;
           /* line-height: 80px; */
           background-color: black;
           margin: auto;
           transition: all 1s;
       }
       .paying button{
           width: 80px;
           height: 40px;
           border: 0;
           background-image: linear-gradient(to right, #bd00de 0%, #ff5100 100%);
           color: #fff;
           transition: all 1s;
       }
       .paying button:hover{
           width: 100px;
           border-radius: 10px;
           color: black;
       }
       .paying:hover{
           height: 80px;
           width: 1000px;
           border: 0;
           border-radius: 20px;
       }
       .by{
           font-size: 34px;
           text-shadow: 0 0 50px ;
           color: #fff;
       }
       .checkAll{
           height: 40px;
           width: 45px;
           margin: 0 auto;
       }
</style>