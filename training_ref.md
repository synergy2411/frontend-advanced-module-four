# npm install typescript -g (installing TS in global environment)

# npm init -y (generate package.json)

"compile" : "tsc --watch"

# npx tsc --init (generate tsconfig.json)

- outDir : "./dist"
- module : "es2015"
- include : [],
- exclude: []

index.html -> script src ="./dist/main.js" -> open it with live server

src/main.ts

> npm run start (http://localhost:4200)

> npm i bootstrap
> change in angular.json -> build -> style -> ./node_modules/bootstrap/dist/css/bootstrap.min.css
> restart the server -> ng serve | npm start

> ng generate component components/users/user-detail

> ng g c .....
> ng g d .....
> ng g p .....
> ng g m .....
> ng g s .....

# useEffect Flavours

- useEffect(() =>{}) : every re-rendering of component
- useEffect(() => {}, []) / componentDidMount : only for the intial rendering
- useEffect(() => {}, [dep1, dep2]) | componentDidUpdate : everytime whenever one of the dependency changes
- useEffect(() => () => {}, [dep1]) | componentWillUnmount : fires everytime whenever the dependency changes, just before the callback, clean-up fn will fire except for intial rendering
