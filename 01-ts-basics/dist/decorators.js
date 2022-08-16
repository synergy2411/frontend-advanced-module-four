// function configurable(target: any, key: any) {
//     console.log(target)
//     console.log(key)
// }
export function configurable(value) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: value,
            writable: value
        });
    };
}
