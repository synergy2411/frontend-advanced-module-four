"use strict";
// type keyword
// interface
// classes
class Foo {
}
class Bar {
}
class Bam {
    constructor(foo, bar) {
        this.foo = foo;
        this.bar = bar;
    }
}
new Bam(new Foo(), new Bar());
let rabbit = {
    legs: 4,
    species: "Bunny",
    walk: () => "Walking"
};
let foo = {
    firstName: "Foo",
    lastName: "Bar",
    dob: new Date("Jan 31, 1986")
};
