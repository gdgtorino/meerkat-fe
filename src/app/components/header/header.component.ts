import {Component, OnInit} from '@angular/core';
import {SharedModule} from '../../_shared/shared.module';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { Header } from '../../models/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menu: boolean = false;

  headerData: Header = {
    main_image: {
      src: '/images/logo-header.png',
      title: 'DevFest Alps Logo',
      caption: 'DevFest Alps 2024'
    },
    background_image: {
      is_image: false,
      color: '#ffffff'
    },
    call_to_action: [
      {
        label: 'Get Tickets',
        href: '#tickets',
        open_new_tab: false,
        color_in_background: true
      },
    ]
  };

  constructor(library:FaIconLibrary) {
    library.addIcons(faBars);
  }
  
  ngOnInit() {
    this.menu = false;
  }
}
