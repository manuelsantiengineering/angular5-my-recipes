import { Component, OnInit } from '@angular/core';

//My Models
import { Ingredient } from '../shared/models/ingredient.model';

//My Services
import {ShoppingListService} from "../shared/services/shopping-list-service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientsList();
    this.shoppingListService.ingredientAddedEmitter
      .subscribe((ingredientsList: Ingredient[])=>{
        this.ingredients = ingredientsList;
      });
  }

}
