import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HeaderModel} from '../../_shared/models/home.model';

@Component({
  selector: 'app-headline',
  imports: [NgOptimizedImage],
  templateUrl: './headline.html',
  styleUrl: './headline.scss'
})
export class Headline implements OnInit{
  @Input() headlineData!: HeaderModel;
  img: any;
  imgMobile: any;
  ngOnInit() {
    this.img = '/images/back-monti.png';
    this.imgMobile = '/images/back-mobile.png';
  }
}
