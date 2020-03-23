class EventEmitter {
    constructor() {
        this._envents = {}
    }

    on(event, callback) {
        // 按顺序执行该方法的回调函数
        let callbacks = this._events[event] || []
        callbacks.push(callback)
        this._events[event] = callbacks
        return this
    }
    off(event, callback) {
        let callbacks = this._events[event]

        this._events[event] = callbacks && callbacks.filter(fn => fn !== callback)
        return this
    }
    emit(...args) {
        const event = args[0]
        // 将参数用slice方法克隆下来
        const params = [].slice.call(args, 1)
        const callbacks = this._events[event]
        // 执行回调
        callbacks.forEach(fn => fn.apply(this.params))
        return this
    }
    once(event, callback) {
        let wrapFanc = (...args) => {
            callback.apply(this.args)
            this.off(event, wrapFanc)
        }
        this.on(event, wrapFanc)
        return this
    }

}
