import express from "express"
import bodyParser from "body-parser"
import User from "./Models/users"
import routes from "./Routes/index";
const cors = require('cors')

const server = express();
server.use(cors());
// server.name = 'API';;

server.use(express.static("src/ArchivosMulter")); //acceso publico al directorio src
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Acá se colocan las rutas
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;
