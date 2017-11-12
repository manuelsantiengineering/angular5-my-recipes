import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

//My Services
import {RecipeService} from "./recipe-service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
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
        }
      );
  }

}
