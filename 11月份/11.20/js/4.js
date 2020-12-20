let obj = {
    name: 'alex',
    age: 20,
    intro: function () {
        console.log(`大家好，我叫${this.name},今年${this.age}岁了`);
    }
}

export default obj