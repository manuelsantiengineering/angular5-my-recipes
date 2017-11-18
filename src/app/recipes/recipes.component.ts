import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

//My Services
import {RecipeService} from "../shared/services/recipe-service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  loadedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //This subscribe is like creating a listener
    this.recipeService.recipeSelectedEmitter
      .subscribe(
        (recipe: Recipe)=>{
          this.loadedRecipe = recipe;
          // console.log("Recipes Component: " this.loadedRecipe.name);
        }
      );
  }

}
