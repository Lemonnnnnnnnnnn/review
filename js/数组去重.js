const arr = [1, 2, 3, 3, 3, 4]

/**
 * 1.利用Set对象
 * Set对象允许你储存任何类型的唯一值，无论是原始值或者是引用值，可用于去重
 */
const arr2 = Array.from(new Set(arr))
console.log(arr2)

/**
 * 2.利用indexOf方法
 * 如果arr3中检查找不到目标值的索引，将其添加进arr3中。
 */
let arr3 = []
for (let i = 0; i < arr.length; i++) {
    if (arr3.indexOf(arr[i]) === -1) {
        arr3.push(arr[i])
    }
}
console.log(arr3)

/**
 * 3.利用对象键值对
 */
let obj = {}
let arr4 = []
for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
        arr4.push(arr[i])
        obj[arr[i]] = true
    }
}
console.log(arr4)
