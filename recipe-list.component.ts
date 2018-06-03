import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  current_styles: any;
  font_size: string;
  current_classes: any;
  recipes: Recipe[];
  recipe_in_progress: Recipe;

  constructor() {
    this.current_styles = {'font-size' : '150%'};
    this.current_classes = { 'darkbg': false};
    this.recipe_in_progress = Recipe.createBlanck();
    this.recipes = [new Recipe(' Southern Style Okra', 'This recipe will change the way you see lady fingers. Enhanced with Southern flavours of mustard seeds, tamarind, jaggery and coconut, a simple recipe that will leave you delighted. ', 2, 20, null, null, '/assets/img/bhindi.jpg'),
    new Recipe(' Mediterranean Watermelon Salad', 'A recent study established that a Mediterranean diet that mostly consists of olive oil and fresh veggies can help in reducing blood pressure and promote healthy heart functions. ', 2, 25, null, null, '/assets/img/watermelon.jpg'),
    new Recipe('Butter Paneer', 'Lovely chunks of paneer bathed in a heavenly gravy of butter, tomatoes, methi leaves, cashew paste and milk. A quick recipe to satisfy your soul.', 2, 30, null, null, '/assets/img/paneer.jpg'),
    new Recipe('Jeera Vegetables', 'Green is good! A lovely mix of spinach, carrots and potatoes, brightened with the peppery flavor of cumin, a game changing condiment.', 2, 35, null, null, '/assets/img/potato.jpg'),
    new Recipe('VGV Vegetable Sandwich', 'ThisA fresh mix of broccoli, zucchini and eggplant, marinated in herbs and placed between beautiful buns. Add a dash of plum chutney and cream cheese to round the dish. ', 2, 30, null, null, '/assets/img/sandwich.jpg'),
    new Recipe(' Pommes Gratin', 'A dreamy combination of potatoes, cream, cheese and butter. For days when you feel like treating yourself.', 2, 35, null, null, '/assets/img/potato-baked.jpg'),
    ];
  }

  public addRecipeClicked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
  this.recipes.unshift(this.recipe_in_progress);
  this.recipe_in_progress = Recipe.createBlanck();
  }

  public zoomInOnRecipe(recipe) {
    console.log('the user clicked on arecipe: ');
    console.log(JSON.stringify(recipe, null, 2));
  }

  public toggleBackground() {
    const newValue = !this.current_classes['darkbg'];
    this.current_classes = { 'darkbg' : newValue};
  }

  public toggleFontSize() {
    if (this.current_styles['font-size'] === '150%') {
      this.current_styles['font-size'] = '175%';
    } else {
      this.current_styles['font_size'] = '150%';
    }
  }
}
