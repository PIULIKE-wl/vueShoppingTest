const mock = require('mockjs')

//用户数据
let usersInfo = [
    {
        userName:'admin',
        passWord:'123456'
    }
]



module.exports = function(app){
    //登录校验用户名和密码
    app.use('/api/userinfo',(req,res) => {
        // console.log(req.query)
        let i;
        for(i=0;i<usersInfo.length;i++)
        {
            if(req.query.userName == usersInfo[i].userName)
            {
                if(req.query.passWord == usersInfo[i].passWord)
                {
                    res.send('allOk')
                    break;
                }
                else
                {
                    res.send('passWordWrong')
                    break;
                }
            }
        }
        if(i == usersInfo.length)
        {
            res.send('userNameNotFound')
            return
        }
    })
    //注册接口
    app.use('/api/userLogon',(req,res) => {
        usersInfo.unshift(req.query)
        console.log(usersInfo)
        res.send('ok')
    })
}