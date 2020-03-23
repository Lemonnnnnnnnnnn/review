// class myPromise {
//     constructor(func) {
//         this.val = 'pending'
//         this.msg = ''
//         func(this.resolve.bind(this), this.reject.bind(this))
//     }
//     resolve(val) {
//         this.val = 'resolved'
//         this.msg = val
//     }
//     reject(err) {
//         this.val = 'resolved'
//         this.msg = err
//     }
//     then(resolve, reject) {
//         if (this.val === 'resolved') {
//             resolve(this.msg)
//         }
//         if (this.val === 'rejected') {
//             reject(this.msg)
//         }
//     }
// }

function myPromise(constructor) {
    const self = this
    self.val = 'pending'
    self.msg = ''
    function resolve(val) {
        if (self.val === 'pending') {
            self.val = 'resolved'
            self.msg = val
        }
    }

    function reject(err) {
        if (self.val === 'pending') {
            self.val = 'rejected'
            self.msg = err
        }
    }

    self.then = (resolve, reject) => {
        if (self.val === 'resolved') {
            resolve(self.msg)
        }
        if (self.val === 'rejected') {
            reject(self.msg)
        }
    }
    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}



var mm = new myPromise(function (resolve, reject) {
    resolve('123');
});

mm.then(function (success) {
    console.log(success);
}, function () {
    console.log('fail!');
})
