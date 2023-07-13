import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(){
    this.createArray();
  }

  public createArray(): void {
    const photos: Array<IPhoto> = [];
    for (let index = 0; index < 4000; index++) {
      photos.push({
        id: 1, 
        photo: "2",
        text: "3",
      })
    }
    console.log('galeria: ', photos);
  }

}
