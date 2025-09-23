import { Component } from '@angular/core';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faBusSimple, faTrainSubway} from '@fortawesome/free-solid-svg-icons';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-section-location',
  imports: [
    FaIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './section-location.html',
  styleUrl: './section-location.scss'
})
export class SectionLocation {
  img: string = '/images/toolbox-photo.png';
  constructor(library:FaIconLibrary) {
    library.addIcons(faBusSimple, faTrainSubway);
  }

}
