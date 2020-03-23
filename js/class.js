// 创建一个类
const Father = function () {
    this.name = 'father'
    this.say = function () {
        console.log('Im u father!!!')
    }
}

Father.prototype.eat = function () {
    console.log(this.name + '正在吃饭！')
}

const father = new Father()
// father.eat()




/* 将Father这个类继承给Son类,
根据Son类创建的实例son拥有Father类的方法以及其原型链上的所有方法*/
const Son = function () { }

Son.prototype = new Father()
Son.prototype.name = 'son'

const son = new Son()
// son.say()
// son.eat()

 
function GrandSon(){
    Father.call(this)
    this.name = 'grandson'
}

const grandson = new GrandSon()
grandson.say()
// grandson.eat()