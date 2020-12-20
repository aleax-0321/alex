const express = require('express')
const app = express()
const port = 3000

//post要加这个模块
const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({
//     extended: true
// }))

//用来解析json格式的  例如axios 
app.use(bodyParser.json())

//跨域
const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))


//get请求
app.get('/fff', (req, res) => {
    console.log(req.query);
    res.send({
        msg: '登录成功-get'
    })
})
let arr = [{
    name: '',
    password: '',
    passworda: ''
}]



//post请求
app.post('/ttt', (req, res) => {
    console.log(req.body);
    let {
        name,
        password,
        passworda
    } = req.body
    console.log(name, password, passworda);


    //arr[key].name
    for (const key in arr) {
        if (arr[key].name !== name) {
            console.log('注册成功');
        } else {
            console.log('已有账号，可直接登录');
        }
    }
    res.send({
        msg: '注册成功-post'
    })
})





app.listen(port, () => console.log(`服务器启动咯~`))