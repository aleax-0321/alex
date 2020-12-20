const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

const Mock = require('mockjs')
let mylist = Mock.mock({
    code: 0,
    count: 50,
    'data|100': [{
        'id|+1': 1,
        "news": "@cword(40)",
    }]
})
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getnews', (req, res) => {
    let {
        curr,
        limit
    } = req.query
    console.log(curr, limit);
    let start = (curr - 1) * limit
    let end = curr * limit
    let newobj = {
        code: 0,
        count: 100,
        data: mylist.data.slice(start, end)
    }
    console.log(newobj);
    res.json(newobj)
})


app.listen(port, () => console.log(`Example app listening on port port!`))