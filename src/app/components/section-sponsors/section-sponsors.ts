import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-section-sponsors',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './section-sponsors.html',
  styleUrl: './section-sponsors.scss'
})
export class SectionSponsors {
  img: string = '/images/back-mobile.png';

}
