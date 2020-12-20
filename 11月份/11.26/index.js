const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res) => res.send('Hello World!'))



app.get('/ggg', (req, res) => {
    console.log(req.query)
    res.send('登录成功~get')
})


app.post('/ppp', (req, res) => {
    console.log(req.body)
    res.send('登录成功~post')
})



app.listen(port, () => console.log(`服务器启动啦~`))