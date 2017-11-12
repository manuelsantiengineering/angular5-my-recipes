import { Component, OnInit } from '@angular/core';

//My Models
import { Recipe } from '../recipe.model';

//My Services
import {RecipeService} from "../recipe-service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.selectedRecipe = this.recipeService.getSelectedRecipe();
  }

}
