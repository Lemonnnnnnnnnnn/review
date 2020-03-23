const arr = []

/**
 * 1. 利用instanceof Array，如果是数组则返回true
 */
console.log(arr instanceof Array)

/**
 * 2. 利用Object的原型链上的toString方法 结果为object Array
 * 注意这里如果不使用call向toString方法传入arr的this
 * Object.prototype.toString(arr) === Object.prototype.toString()
 * 结果返回object Object
 */
console.log(Object.prototype.toString.call(arr))
// console.log(Object.prototype.toString())

/**
 * 3.利用Array构造器上的方法
 */
console.log(Array.isArray(arr))

/**
 * 4.利用对象的constructor属性
 * 
 * constructor 属性返回对创建此对象的数组函数的引用。
 * []这个实例继承了 函数Array构造器上的方法
 */

 console.log(arr.constructor)
 console.log(arr.constructor === Array)