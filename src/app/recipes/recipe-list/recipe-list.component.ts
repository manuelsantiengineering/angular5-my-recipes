import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test Description 1', 'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg' ),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg' )
  ];

  loadedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.loadedRecipe = recipe;
    this.selectedRecipe.emit(recipe);
  }

}
