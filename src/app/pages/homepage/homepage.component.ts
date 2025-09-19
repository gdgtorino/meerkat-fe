import {Component, OnInit} from '@angular/core';
import {Headline} from '../../components/headline/headline';
import {HomeStructureModel} from '../../_shared/models/home.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    Headline
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  homeData: HomeStructureModel = {} as HomeStructureModel;
  constructor() {
  }
  ngOnInit() {
    // this.homeData.header.main_image.src = 'public/images/back-monti.png';
  }

}
