import  express  from "express";
import Cors from "cors";

import config from "./config";
import UserRoute from "./router/UserRoute"
import AuthUserRoute from "./router/AuthUserRoute"

const app = express();

app.use(express.json());
app.use(Cors({
    Credential: true,
    origin: config.port
}));

app.use(UserRoute);
app.use(AuthUserRoute);

app.listen(config.port, () => {
    console.log("Servidor rodando!")
});