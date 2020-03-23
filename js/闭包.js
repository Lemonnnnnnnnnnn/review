function asd() {
    var a = 1
    return function () {
        console.log(++a)
    }
}
// 函数调用完本a变量应被垃圾回收机制回收
const b = asd()
// 依然可以打印A
b()

function test() {
    var name = 'lemon'
    this.getName = () => {
        return name
    }
}
const aaa = new test()
const name = aaa.getName()
console.log(name)
