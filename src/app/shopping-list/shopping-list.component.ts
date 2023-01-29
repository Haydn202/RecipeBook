import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/models/ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Patty', 1),
    new Ingredient('Bun', 1)
  ];
  constructor() {
  }
  ngOnInit(): void {
  }

}
