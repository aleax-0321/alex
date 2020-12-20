const express = require('express')
const app = express()
const port = 3000

//post请求要加
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))

//跨域
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

//get请求
app.get('/hhh', (req, res) => {
    console.log(req.query);
    res.send('注册成功了哦~get')
})

//post请求
app.post('/aaa', (req, res) => {
    console.log(req.body);
    res.send('注册成功了哦~post')
})

app.listen(port, () => console.log(`服务器启动了哦~`))