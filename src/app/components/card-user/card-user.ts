import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-card-user',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card-user.html',
  styleUrl: './card-user.scss'
})
export class CardUser implements OnInit {
  img: string = '';
  ngOnInit() {

    this.img= '/images/back-mobile.png';
  }
}
