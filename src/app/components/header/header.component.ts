import {Component, OnInit} from '@angular/core';
import {SharedModule} from '../../_shared/shared.module';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;
  constructor(library:FaIconLibrary) {
    library.addIcons(faBars);
  }
  ngOnInit() {
    this.menu = false;
  }
}
