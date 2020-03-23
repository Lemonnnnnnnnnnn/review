function test(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (Math.pow(i, 2) + Math.pow(j, 2) === n) {
                return true
            } else if (Math.pow(i, 2) + Math.pow(j, 2) > n) {
                return false
            }
        }
    }
}

console.log(test(3))