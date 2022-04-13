# express boilerplate

This is a express boilerplate with the following features:

> - `ECMA Script 2020` or ES2020 features enabled
> - `Babel` to transpile the js code
> - `Dotenv` Load environment variables from .env file
> - `Eslint` Code quality tool
> - `Prettier` to prettify the code
> - `CORS` feature enabled
> - `Error Handling` errors custom middleware and helpers globally configured
> - `Winston` logger tool support

## Basic Information

- `App` entry point is located in `./src/app.js`

- `Server` config entrypoint is located in `./src/bin/www.js`

- `Babel` config to transpile the code is located at `./.babelrc`

- `Prettier` config is located at `./.prettierrc`

- `Eslint` config is located at `./.eslintrc`

- `Error` Handling middleware is located at `./src/middlewares/errorHandler.middleware.js`

  - You can configure as many errors you need in `./src/helpers/errors.helper.js`

## Folder Structure

> `src/`
>
> - **`bin/`** - server configuration folder
> - **`helpers/`** - some helpers func i.e. an error helper that returns json everytime an error comes in
> - **`middlewares/`** - here you can find all the custom middlewares

## Getting Started

Copy the .env.example to .env

```bash
cp env.example .env
```

---

To get started with this repo npm install in the root folder

```bash
npm i --save
```

To getting started with a dev environment. Here we use nodemon and babel-node to restart the server asa we change
something

```bash
npm run start:dev
```

To transpile the code and create a production build

```bash
npm run transpile
```

This command will create a build in the root directory

To start with a production ready build you can run this command

```bash
# This set the NODE_ENV to production, npm-run-all, create a build and run the server command
npm run start
```

If you have a build and you want to node the build you can run

```bash
# This command launch the node instance inside the ./build/bin/www
npm run server
```
