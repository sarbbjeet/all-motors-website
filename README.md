## Getting Started
This is nextjs based fullstack project which manage vehicle specification, image gallery and many more. 

## Features 
A. Server
   1. mysql database 
   2. images store 
   3. admin panel 
   4. login manage 
   5. cookies handling 
   6. rest api routes 
   
B. Client
   1. responsive design 
   2. navbar/ mobile menu 
   3. image sliders
   4. multiform handling
   5. react based components
   6. redux store 
   7. serverside rendering 
   
   
## .env variables

```
DATABASE_URL=mysql://root:root@localhost:3306/mydb11
STORAGE_PATH=public/_uploads/
PRIVATE_KEY=secure_jwt_key

```

## express server
The external Express server in this project is utilised to render dynamic pictures in nextjs. A dedicated express server is utilised in this project since next js only renders pictures that are present at build time, making it impossible for photos that are uploaded after build to be viewable or accessed.

```
const express = require("express");
const path = require("path");
const port = 4000;
const app = express();
app.use("/store", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("server is listening on port " + port);
});

```
## Run express server and nextjs app together (package.json)

```

  "scripts": {
    "server": "node server1.js",
    "dev": "concurrently \"npm run server\" \"npm run generate && next\"",
    "generate": "npx prisma generate",
    "prisma:migrate": "npx prisma migrate deploy",
    "build": "npm run generate && next build",
    "start": "concurrently \"npm run server\" \"next start -p 3000\"",
    "lint": "next lint"
  },

```


## Run server on production mode

```
npm install or yarn install 
npm run build 
npm start
```

## First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Run commands in the node file

```
const execa = require("child_process").exec;
execa("npx prisma migrate dev", (e, stdout, stderr) => {
  if (e instanceof Error) {
   console.error(e);
  }
   console.log("out", stdout);
});

```
In the above example prisma migrate command is running using node file code.   




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

