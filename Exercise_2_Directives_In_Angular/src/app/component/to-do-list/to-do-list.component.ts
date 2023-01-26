import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  public ToDoItemsList = [
    {
      name : 'modelisation',
      description : "concevor la plateforme  ",
      statut : 'terminé'
    },
    {
      name : 'interview',
      description : "pour voir ce aue le client attends  ",
      statut : 'En cours'
    },
    {
      name : 'development',
      description : "des premiers fonctionnalites ",
      statut : 'terminé'
    },
    {
      name : 'test',
      description : "test utilisateurs",
      statut : 'En cours'
    },
    {
      name : 'deploiement',
      description : "deploement de la premiere version",
      statut : 'terminé'
    }
  ]

}
