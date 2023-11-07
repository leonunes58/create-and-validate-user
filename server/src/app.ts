import  express  from "express";
import config from "./config";
import UserRoute from "./router/UserRoute"

const app = express()

app.use(express.json())

app.use(UserRoute)

app.listen(config.port, () => {
    console.log("Servidor rodando!")
})