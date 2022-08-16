function addAtBeginning<T>(num: T, arr: Array<T>): Array<T> {
    return [num, ...arr]
}

const numberArray = addAtBeginning<number>(10, [9, 8, 7, 6]);

const stringArray = addAtBeginning<string>("A", ["B", "C", "D"])

// stringArray[0].

// numberArray[0].

// const numArray = addAtBeginning(4, [3,4,6,7])

