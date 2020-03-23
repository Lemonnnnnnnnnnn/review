
function test() {
    var name = 'lemon'
    return function () {
        console.log(name)
    }
}

const target = test()
target()