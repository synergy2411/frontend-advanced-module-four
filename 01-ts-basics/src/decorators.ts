
// function configurable(target: any, key: any) {
//     console.log(target)
//     console.log(key)
// }

export function configurable(value: boolean) {
    return function (target: any, key: any) {
        Object.defineProperty(target, key, {
            configurable: value,
            writable: value
        })
    }
}
