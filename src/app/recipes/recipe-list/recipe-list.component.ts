import {Component, OnInit} from '@angular/core';
import {Recipe} from "../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe(
      'Krabby Patty',
      'The specialty of the crusty crab',
  'https://cdn.mos.cms.futurecdn.net/28Ltb9FTfcnKzLb5yfLsKi-320-80.jpg'
    ),
    new Recipe(
      'Chum Bucket',
      'The Nasty Nasty Chum Bucket',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Siigsex0djtdf5n9fyI2HwNXsF503ryu0Q&usqp=CAU'
    )
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

}
