import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private isFavorite:boolean = true; 
  camelCaseStr:string="";
  constructor() { }

  onFavorite():boolean{
    this.isFavorite = !this.isFavorite;
    return this.isFavorite;
  }

  ngOnInit(): void {
  }

}
