// type keyword
// interface
// classes


class Foo { }
class Bar { }

class Bam {
    constructor(private foo: Foo, private bar: Bar) { }
}

new Bam(new Foo(), new Bar());




interface animal {
    legs: number;
    species: string;
    walk: () => string;
}

let rabbit: animal = {
    legs: 4,
    species: "Bunny",
    walk: () => "Walking"
}



type user = {
    firstName: string;
    lastName: string;
    dob: Date;
}

let foo: user = {
    firstName: "Foo",
    lastName: "Bar",
    dob: new Date("Jan 31, 1986")
}