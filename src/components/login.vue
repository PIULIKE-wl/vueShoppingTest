<template>
<div v-if="!store.state.isIn">
  <div class="titlex">
        <span>商城</span>
    </div>
    <div class="login" v-show="isLogin">
        <div class="loginx">
            <h1>login</h1>
            <div>
                <input type="text" placeholder="用户名" id="userName" v-model="userName">
                <span id="userNameNone" v-show="isUserName">用户名不存在</span>
            </div>
            <div>
                <input type="password" placeholder="密码" id="passWord" v-model="passWord">
                <span id="passWordWrong" v-show="isPassWord">密码错误</span>
            </div>
            <div>
                <button  class="btn" @click="logining">登录</button>
            </div>
            <div>
                <button  class="btn" @click="isLogon = !isLogon;isLogin = !isLogin">注册</button>
            </div>
        </div>
    </div>
        <div class="login" v-show="isLogon">
        <div class="loginx">
            <h1>注册</h1>
            <div>
                <input type="text" placeholder="用户名" id="newUserName" v-model="newUserName">
            </div>
            <div>
                <input type="text" placeholder="密码" id="newPassWord" v-model="newPassWord">
            </div>
            <div>
                <button  class="btn" @click="logoning">完成注册</button>
            </div>
        </div>
    </div>
</div>
<div v-if="store.state.isIn">
    <router-view></router-view>
</div>
</template>

<script>
import {useRouter} from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue"
import axios from 'axios'
import top from './top.vue'
export default {
    name:'login',
    components:{
        top
    },
    setup() {
        const store = useStore();
        let isUserName = ref(false)
        let isPassWord = ref(false)
        let isLogon = ref(false)
        let isLogin = ref(true)



        let userName = ref("")//输入的用户名
        let passWord = ref("")//输入的密码
        let newUserName = ref("")//注册的新用户名
        let newPassWord = ref("")//注册的新密码


        const router = useRouter();
        
        // console.log(store.state.isIn)
        function logining(){
            //发送请求校验用户名和密码
            axios.get('/api/userinfo',{
                params:{
                    'userName':userName.value,
                    'passWord':passWord.value
                }
            }).then(res => {
                
                if(res.data == 'allOk')
                {
                    store.commit('isInChange')
                    router.push({name:'top'})
                    
                }
                else
                {
                    if(res.data == 'passWordWrong')
                    {
                        isPassWord.value = true
                        
                    }
                    if(res.data == 'userNameNotFound')
                    {
                        isUserName.value = true
                        
                    }
                }
            })
        }
        //发送请求注册
        function logoning(){
            isLogon.value = !isLogon.value;
            isLogin.value = !isLogin.value;
            axios.get('/api/userLogon',{
                params:{
                    'userName':newUserName.value,
                    'passWord':newPassWord.value
                }
            }).then(res => {
                alert('注册成功')
            })
        }

        return {
            store,
            isLogon,
            isLogin,
            userName,
            passWord,
            newUserName,
            newPassWord,
            isPassWord,
            isUserName,
            logining,
            logoning
        }
    },
}
</script>

<style>
body{
      margin: 0 auto;
      width: 1200px;
      background-color:rgb(51, 51, 71);
      background:url("../assets/bg.jpg");
      background-repeat:no-repeat;
      background-size:100% auto;
  }
  .titlex{
      height: 600px;
      position: relative;
      top: 250px;
      left: 0%;
      font-size: 100px;
      color: #fff;
  }
  .titlex span{
      position: absolute;
      text-shadow: 0 0 50px rgb(224, 224, 231);
      margin-top: 294px;
  }
  .login{
      position: relative;
      left: 888px;
      top: -192px;
      display: inline-block;
      height: 450px;
      width: 400px;
      background: #00000080;
      text-align: center;
  }
  .loginx{
    margin-top: 61px;
  }
  .loginx h1{
      color: #fff;
      font-size: 70px;
      margin-bottom: 10px;
  }
  #userName,
  #passWord{
      width: 200px;
      height: 20px;
      border: 0;
      background: #ffffff00;
      padding: 5px 10px;
      color: #fff;
      border-bottom: 3px solid #fff;
      font-size: 17px;
      margin-top: 27px;
  }
  #newUserName,
  #newPassWord{
      width: 200px;
      height: 20px;
      border: 0;
      background: #ffffff00;
      padding: 5px 10px;
      color: #fff;
      border-bottom: 3px solid #fff;
      font-size: 17px;
      margin-top: 27px;
  }
  .btn{
      border: 0;
      width: 150px;
      height: 30px;
      margin-top: 33px;
      font-size: 20px;
      border-radius: 25px;
      background-image: linear-gradient(to right, #de0000 0%, #0046ff 100%);
      color:#fff
  }
  .btn:hover{
    cursor:pointer;
    transform: scale(1.2);
    transition: all 0.5s;
    color: black;
  }
  #userNameNone{
      display: block;
      color: red;
      font-size: 12px;
  }
  #passWordWrong{
      display: block;
      color: red;
      font-size: 12px;
  }
  .logonBlack{
      position: absolute;
      top: 600px;
      left: 800px;
      height: 200px;
      width: 300px;
      background-color: black;
  }
</style>