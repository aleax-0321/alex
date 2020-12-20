const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())


const Mock = require('mockjs')
let mylist = Mock.mock({
    code: 0,
    count: 100,
    'data|100': [{
        'id|+1': 1,
        'username': '@cname',
        'gender|1': ['男', '女'],
        'age|20-30': 0,
        'address': '@city(true)',
        'score|10-80': 0,
        'points|100-600': 0,
        'money|10000-10000000': 0
    }]
})

app.get('/ggg', (req, res) => {
    let {
        page,
        limit
    } = req.query
    console.log(page, limit);
    let start = (page - 1) * limit
    let end = page * limit
    let newobj = {
        code: 0,
        count: 100,
        data: mylist.data.slice(start, end)
    }
    console.log(newobj);
    res.json(newobj)
})


app.listen(port, () => console.log(`Example app listening on port port!`))