import { pizzaModel } from "../models/pizza.model.js";

const readPizzas = async (req, res) => {
  const pizzas = await pizzaModel.getPizzas();
  res.json(pizzas);
};

const readPizza = async (req, res) => {
  const { id } = req.params;
  const pizza = await pizzaModel.getPizza(id);
  res.json(pizza);
};

export const pizzaController = {
  readPizzas,
  readPizza,
};
