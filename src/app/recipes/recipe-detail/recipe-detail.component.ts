import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

//My Models
import { Recipe } from '../recipe.model';

//My Services
import {RecipeService} from "../../shared/services/recipe-service";
import {ShoppingListComponent} from "../../shopping-list/shopping-list.component";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getSelectedRecipeById(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

}
