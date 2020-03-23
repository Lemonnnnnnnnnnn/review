const str = '   asdasdasdasd   '

const reg = /^\s+|\s+$/g

const res = str.replace(reg, '')

const test = /\s+/g.test(res)
const test2 = /\s+/g.test(str)
console.log(test, test2)