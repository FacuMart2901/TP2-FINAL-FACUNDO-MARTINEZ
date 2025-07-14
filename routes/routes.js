import { Router } from "express";
import Controller from "../controllers/controller.js";
import inputValidates from "../midlewares/inputValidates.js";


const controller = new Controller();

const routers = Router()

routers.get("/", controller.getAll);
routers.post("/", inputValidates, controller.create);


export default routers;
