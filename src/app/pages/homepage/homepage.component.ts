import {Component, OnInit} from '@angular/core';
import {Headline} from '../../components/headline/headline';
import {HomeStructureModel} from '../../_shared/models/home.model';
import {CardUser} from '../../components/card-user/card-user';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {SectionLocation} from '../../components/section-location/section-location';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    Headline,
    CardUser,
    FaIconComponent,
    SectionLocation
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  homeData: HomeStructureModel = {} as HomeStructureModel;
  constructor(library:FaIconLibrary) {
    library.addIcons(faChevronRight);
  }
  ngOnInit() {
    // this.homeData.header.main_image.src = 'public/images/back-monti.png';
  }

}
