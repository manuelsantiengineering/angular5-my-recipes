import { Component, OnInit, Input } from '@angular/core';

//My Models
import { Recipe } from '../../recipe.model';

//My Services
import {RecipeService} from "../../../shared/services/recipe-service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelectRecipe(){
    // this.selectedRecipe.emit(this.recipe);
    this.recipeService.selectedRecipe(this.recipe);
  }
}
