
import {EventEmitter, Injectable} from "@angular/core";

//My Models
import {Recipe} from "../../recipes/recipe.model";

@Injectable()

export class RecipeService{

  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipeSelected: Recipe;

  private recipeList: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test Description 1', 'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg' ),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg' )
  ];

  getRecipes(){
    return this.recipeList.slice();
  }

  getSelectedRecipe(){
    return this.recipeSelected;
  }

  selectedRecipe(recipe: Recipe){
    this.recipeSelected = recipe;
    console.log(this.recipeSelected.name);
    this.recipeSelectedEmitter.emit(recipe);
  }

}
