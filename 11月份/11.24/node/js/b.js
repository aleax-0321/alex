module.exports = {
    desc: '这是一个求和的模块',

    sum(...r) {
        let total = 0
        console.log(r);
        for (const value of r) {
            total += value
        }
        return total
    }
}