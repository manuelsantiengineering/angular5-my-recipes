
import {EventEmitter, Injectable} from "@angular/core";

//My Models
import {Ingredient} from "../models/ingredient.model";

@Injectable()

export class ShoppingListService{

  ingredientAddedEmitter = new EventEmitter<Ingredient[]>();

  private ingredientsList: Ingredient[] = [
  ];

  getIngredientsList(){
    return this.ingredientsList.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredientsList.push(ingredient);
    this.ingredientAddedEmitter.emit(this.ingredientsList.slice());
  }

  addIngredientsList(ingredients: Ingredient[]){
    this.ingredientsList.push(...ingredients);
    this.ingredientAddedEmitter.emit(this.ingredientsList.slice());
  }

}
