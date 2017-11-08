import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  loadedRecipe: Recipe;
  loadRecipe: boolean;

  constructor() { }

  ngOnInit() {
  }

  onDisplayRecipe(selectedRecipe: Recipe){
    this.loadedRecipe = selectedRecipe;
    this.loadRecipe = true;
  }

}
