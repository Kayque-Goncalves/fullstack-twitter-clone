<h1 align="center">
  React Twitter clone
</h1>

That is a project made to train my knowledge and learn more about advanced React and Node, so... feel free to give me any feedback.

🚧 **Twitter Clone is under development** 🚧

## Layout

Home page
![Home Page](/.github/home.png)

Sign up Modal
![Signup Modal](/.github/signup.png)

Login page
![Login Page](/.github/login.png)

Profile page
![Profile Page](/.github/profile.png)

> Note: this is currently the only fully mobile responsive page.

## Tech Stack

- Typescript
- React
  - Styled components
  - Redux
  - Contexts
  - Axios
- Node.js
  - Express
  - Cors
  - Mongoose
  - Mongo DB
  - Bcryptjs
  - Json web token
  - Clean Architecture

## Building

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app.

> With yarn

```bash
git clone https://github.com/Kayque-Goncalves/fullstack-twitter-clone.git
$ cd client
$ yarn install
$ yarn start
```

And in the server side

```bash
$ cd server
$ yarn install
$ yarn dev2
```

_Before execute the dev2 script, make sure you have been created the .env file in the server root directory and added your own mongodb connection string as CONNECTION_URL_

> With npm

```bash
git clone https://github.com/Kayque-Goncalves/fullstack-twitter-clone.git
$ cd client
$ npm install
$ npm run start

and the server side

$ cd server
$ npm install
$ npm run dev2
```

Runs the app in the development mode.<br/>
