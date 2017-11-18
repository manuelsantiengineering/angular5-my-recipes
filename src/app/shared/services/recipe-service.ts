
import {EventEmitter, Injectable} from "@angular/core";

//My Models
import {Recipe} from "../../recipes/recipe.model";
import {Ingredient} from "../models/ingredient.model";

//MyServices
import {ShoppingListService} from "./shopping-list-service";

@Injectable()

export class RecipeService{

  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipeSelected: Recipe;

  private recipeList: Recipe[] = [
    new Recipe(
      'Butter Pancakes',
      'Test Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/9/99/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg',
      [
        new Ingredient("Flour", 2),
        new Ingredient("Butter", 1),
        new Ingredient("Milk", 1),
        new Ingredient("Eggs", 2)
      ]),
    new Recipe(
      'Burger',
      'Test Description 2',
      'https://www.insideretail.com.au/wp-content/uploads/2014/02/fast-food-hamburger.jpg',
      [
        new Ingredient("Meat", 1),
        new Ingredient("Buns", 2),
        new Ingredient("Mayonnaise", 1),
        new Ingredient("Ketchup", 1),
        new Ingredient("Onions", 1),
        new Ingredient("Cheese Slice", 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){

  }

  getRecipes(){
    return this.recipeList.slice();
  }

  getSelectedRecipe(){
    return this.recipeSelected;
  }

  getSelectedRecipeById(id: number){
    return this.recipeList[id];
  }

  selectedRecipe(recipe: Recipe){
    this.recipeSelected = recipe;
    console.log("Recipe Service: " + this.recipeSelected.name);
    this.recipeSelectedEmitter.emit(this.recipeSelected);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientsList(ingredients);
  }
}
