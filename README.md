# react-apollo-link-graphql
react-apollo-link-graphql

-------------- Settings & starter Kit --------------

1. create a react app :
npx create-react-app react-apollo-link-graphql

2. configure lint : 
npm install eslint --save-dev 
./node_modules/.bin/eslint --init

3. add airbnb lint style 
npm install babel-eslint --save-dev
npm install eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y --save-dev

4. configure lint : .eslintrc.js

5. configure dotenv : 
npm install dotenv --save 

and in index.js file and before any load :

```js
// configure env vars
dotenv.config()

// render
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
``` 
You should restart app each time you made change on .env file.
REACT_APP_ prefix is nessasary.

6. configure route file :
/routes/Routes.js

modify index.js like this :

```js
import Routes from './routes/Routes'
ReactDOM.render(<Routes />, document.getElementById('root'))
```

7. customize logger file
yarn add debug
AppLogger.js

8. install styled components :
yarn add styled-components

9. add prop-types :
yarn add prop-types

10. add react-router-dom : 
yarn add react-router-dom

11. add apollo & gql : 
yarn add apollo-boost react-apollo graphql-tag graphql

-------------- Settings end --------------

12. add formik for user form and apollo mutation :
yarn add formik 

13. add yup validation
yarn add yup 

14. add react-table to enhance list display
yarn add react-table
