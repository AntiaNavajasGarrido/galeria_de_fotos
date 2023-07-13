import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private _photoService: PhotoService) {}

  ngOnInit(): void {
    this._photoService.createArray();
  }
}
