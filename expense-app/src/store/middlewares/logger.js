// const logger = () => () => () => {

// }

export function logger(store) {
    return function (next) {
        return function (action) {
            // Any Async task here
            console.log("STATE : ", store.getState())
            console.log("ACTION : ", action)
            return next(action);
        }
    }
}