let name = 'Alex'
let age = 20
let intro = () => {
    console.log(`大家好，我叫${name},今年${age}岁了`);
}

//导出重命名
export {
    name as newname,
    age,
    intro
}