const express = require('express')
const app = express()
const port = 3000

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({
    extended: true
}))


const mysql = require('mysql')
const e = require('express')
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'user'
})

// pool.query('SELECT * FROM userlist', (err, result) => {
//     if (err) throw err
//     console.log(result);
// })


app.use(express.static('public'))

app.engine('html', require('express-art-template'));


app.set('view options', {
    escape: true,
});


app.set('views', 'views');


app.set('view engine', 'html');



app.get('/', (req, res) => {
    console.log(req.headers.cookie);
    res.render('index.html')
})


//注册
app.post('/reg', (req, res) => {
    let {
        regname,
        regpass,
        regpass2
    } = req.body

    //判断用户是否为空
    if (regname.trim() === '') {
        res.json({
            code: 1,
            msg: '用户不能为空'
        })
        return
    }


    //判断密码是否为空
    if (regpass.trim() === '') {
        res.json({
            code: 2,
            msg: '密码不能为空'
        })
        return
    }

    //判断两次密码是否一致
    if (regpass !== regpass2) {
        res.json({
            code: 3,
            msg: '两次密码不一致'
        })
        return
    }


    //判断数据库中是否存在已注册的用户名
    pool.query('SELECT username FROM userlist WHERE username=?', [regname], (err, result) => {
        if (err) throw err
        if (result.length !== 0) {
            res.json({
                code: 4,
                msg: '用户名已存在'
            })
            return
        }

        //把用户名和密码放入数据库中

        pool.query('INSERT INTO userlist(username,password) VALUES(?,?)', [regname, regpass], (err, result) => {
            if (err) throw err
            console.log(result);
            res.json({
                code: 0,
                msg: '注册成功'
            })
            return
        })
    })
})


//登录

app.post('/login', (req, res) => {
    let {
        logname,
        logpass
    } = req.body
    // console.log(req.body);


    //判断用户名是否为空
    if (logname.trim() === '') {
        res.json({
            code: 1,
            msg: '用户名不能为空'
        })
        return
    }


    //判断密码是否为空
    if (logpass.trim() === '') {
        res.json({
            code: 2,
            msg: '密码不能为空'
        })
        return
    }

    //判断登录的用户和密码是否和数据库中的一致 
    pool.query('SELECT * FROM userlist WHERE username=?', [logname], (err, result) => {
        if (err) throw err
        if (result.length == 0) {
            res.json({
                code: 3,
                msg: '用户名不存在，请先去注册'
            })
            return
        } else if (result[0].username) {

            if (result[0].password === logpass) {

                // 设置cookie
                res.cookie('logname', logname)


                res.json({
                    code: 0,
                    msg: '登录成功~'
                })
            } else {
                res.json({
                    code: 4,
                    msg: '密码不正确~'
                })
            }
        }
    })
})


app.listen(port, () => console.log(`服务器启动啦~`))