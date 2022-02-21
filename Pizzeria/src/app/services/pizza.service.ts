import { Injectable } from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PIZZAS} from "../shared/pizzas";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() {
  }

  public getPizzas(): Pizza[] {
    return PIZZAS;
  }

  public getPizza(id: string): Pizza {
    return PIZZAS.filter(pizza => pizza.id === id)[0];
  }

  public getFeaturedPizzas(): Pizza[] {
    return PIZZAS.filter(pizza => pizza.featured);
  }
}
