import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _photoService: PhotoService) {}

  public galeria: Array<IPhoto> = [];
  
  ngOnInit(){
    this.galeria = this._photoService.galeria;
  }
}
