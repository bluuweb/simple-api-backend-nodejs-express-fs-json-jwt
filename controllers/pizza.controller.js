import { pizzaModel } from "../models/pizza.model.js";

const readPizzas = async (req, res) => {
  const pizzas = await pizzaModel.getPizzas();
  res.json(pizzas);
};

export const pizzaController = {
  readPizzas,
};
