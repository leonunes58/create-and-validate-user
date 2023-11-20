import  express from "express";

import { createUser } from "../controllers/Users";

const router = express.Router();

router.post("/user/create", createUser);

export default router;