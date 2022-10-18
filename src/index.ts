import express from "express";
import { colors } from "./utils/consoleColors";
import Routes from "./routes";
import cors from "cors";
import authMiddleware from "./middlewares/authMiddleware";

const app = express();
const port = 3333;
const routes = new Routes();
const { green, blue, red } = colors;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(authMiddleware);

routes.tasks(app);
routes.users(app);

app.listen(process.env.PORT || 3333, () =>
  console.log(`${green}Servidor${blue} Rodando ${red}na porta`, port)
);
