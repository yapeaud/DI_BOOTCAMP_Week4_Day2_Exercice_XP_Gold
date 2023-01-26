import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  seletedCategorie = "";
  actualCategorie = "";
  dataSend = new Array();

  categories = ["Fruits", "Voiture", "Fournitures"];

  produitList = [
    {
      name: 'Orange',
      price: 300,
      category: this.categories[0]
    },
    {
      name: 'Land Cruser',
      price: 2000000,
      category: this.categories[1]
    },
    {
      name: 'Orange',
      price: 500,
      category: this.categories[0]
    },
    {
      name: 'bic',
      price: 300,
      category: this.categories[2]
    },
    {
      name: 'Range Rover',
      price: 300,
      category: this.categories[1]
    }
  ]

 /**
   * Initialise la catégorie sélectionnée
   * @param selectInput
   */
 onSelectionChanged(selectInput: any) {
  this.seletedCategorie = selectInput.value;
}

/**
 * Retourne les valeurs de selectedCategorie et actualCategorie sous forme d'objet
 * @param actualCategorie
 * @returns Un objet composé de selectedCategorie et actualCategorie
 */
getData(actualCategorie: any): any {
  return { selectedCategorie: this.seletedCategorie, actualCategorie: actualCategorie }
}
}
