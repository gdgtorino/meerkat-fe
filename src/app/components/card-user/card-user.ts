import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {SharedModule} from '../../_shared/shared.module';

@Component({
  selector: 'app-card-user',
  imports: [
    SharedModule,
    NgOptimizedImage,
    FaIconComponent
  ],
  templateUrl: './card-user.html',
  styleUrl: './card-user.scss'
})
export class CardUser implements OnInit {
  constructor(library:FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIcons(faGithub, faLinkedin);
  }
  img: string = '';
  ngOnInit() {

    this.img= '/images/back-mobile.png';
  }
}
