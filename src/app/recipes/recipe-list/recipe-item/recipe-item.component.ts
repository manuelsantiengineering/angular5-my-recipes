import { Component, OnInit, Input } from '@angular/core';

//My Models
import { Recipe } from '../../recipe.model';

//My Services

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
