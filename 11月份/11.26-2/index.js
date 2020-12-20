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

//post请求
app.post('/ttt', (req, res) => {
    console.log(req.body);
    res.send({
        msg: '登录成功-post'
    })
})



app.listen(port, () => console.log(`服务器启动咯~`))