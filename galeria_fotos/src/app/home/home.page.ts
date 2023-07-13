import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  public galeria: Array<IPhoto> = [];
  
  ngOnInit(){
    this.createArray();
  }

  public createArray(): void {
    for (let index = 0; index < 20; index = index + 1) {
      this.galeria.push({
        id: index + 1, 
        photo_url: `https://picsum.photos/id/${index + 1}/500/500.jpg`,
        text: 'Esta es la descripcion de la foto con id ' + (index + 1) + '.',
      })
    }
    
    console.log('galeria: ', this.galeria);
  }

}
