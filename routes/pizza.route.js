import { Router } from "express";
import { pizzaController } from "../controllers/pizza.controller.js";

const router = Router();

router.get("/", pizzaController.readPizzas);

export default router;
