import { createStore } from 'vuex'

export default createStore({
    state: {
        isIn:false,
        //商品数据
        goods:[
            {
                id:1,
                name:'佳能EOS M50二代学生入门级mark2 M200数码高清旅游微单相机M6',
                price:2100,
                number:1,
                photo:require('../assets/camera1.jpg'),
                isInCar:true,//是否在购物车中
                isCheck:false//是否被勾选
            },
            {
                id:2,
                name:'苹果iPhone X苹果xr全新国行xs max正品8plus手机',
                price:1399,
                number:1,
                photo:require('../assets/phone1.jpg'),
                isInCar:true,
                isCheck:false
            },
            {
                id:3,
                name:'正品DW-11手表小绿表皮带防水石英表超薄',
                price:238,
                number:1,
                photo:require('../assets/watch1.jpg'),
                isInCar:false,
                isCheck:false
            },
            {
                id:4,
                name:'新款Apple/苹果 iPad Air4代（第四代）10.9英寸正品国行ipadair4',
                price:3498,
                number:1,
                photo:require('../assets/pad1.jpg'),
                isInCar:false,
                isCheck:false
            },
            {
                id:5,
                name:'ROG/玩家国度 魔霸新锐2021 魔霸5Plus R9/RTX3070游戏笔记本电脑',
                price:8349,
                number:1,
                photo:require('../assets/pc1.jpg'),
                isInCar:false,
                isCheck:false
            }
        ]
    },
    mutations: {
        //从购物车中删除
        deletegd(state,id){
            let x = state.goods.filter(item => item.id == id);
            x[0].isInCar = false;
        },
        //放入购物车
        pushShoppingCar(state,id){
            let x = state.goods.filter(item => item.id == id);
            x[0].isInCar = true;
        },
        //改变主页状态，表示是否已从登录页面跳转到主页
        isInChange(state){
            state.isIn = !state.isIn
        }
    },
    actions: {
    },
    
})
