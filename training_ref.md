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
