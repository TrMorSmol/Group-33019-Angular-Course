import { Component, OnInit } from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public firstPromotion!: Pizza;
  public secondPromotion!: Pizza;

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.displayFeaturedPizzas();
  }

  private displayFeaturedPizzas(): void {
    let featuredPizzas: Pizza[] = this.pizzaService.getFeaturedPizzas();
    this.firstPromotion = featuredPizzas[0];
    this.secondPromotion = featuredPizzas[1];
  }
}
