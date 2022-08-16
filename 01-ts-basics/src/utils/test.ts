import { configurable } from '../decorators';

// @ClassLevel()
class Test {
    @configurable(true)
    title: string = "Wake up"

    // @MethodLevel()
    // classMethod( @parameterLevel() paramOne : string ){}
}

console.log(new Test().title);