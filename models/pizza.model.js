import { readFile } from "node:fs/promises";

const getPizzas = async () => {
  const data = await readFile("db/pizzas.json", "utf-8");
  return JSON.parse(data);
};

export const pizzaModel = {
  getPizzas,
};
