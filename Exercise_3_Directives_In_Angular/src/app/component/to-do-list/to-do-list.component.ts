import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
   public ToDoItemsList = [
    {
      id: 1,
      description: "c'est un fruit  ",
      statut: 'terminé'
    },
    {
      id: 2,
      description: "Aliment de petit déjeuner ",
      statut: 'En cours'
    },
    {
      id: 3,
      description: "c'est une poudre de blé ",
      statut: 'terminé'
    },
    {
      id: 4,
      description: "legume piquant ",
      statut: 'En cours'
    },
    {
      id: 5,
      description: "feuille de laitue",
      statut: 'terminé'
    }
  ]



}
