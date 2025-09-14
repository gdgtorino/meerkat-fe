import { Component } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../../models/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerData: Footer = [
    {
      id: 1,
      order: 0,
      title: 'About Us',
      type_box: {
        id: 1,
        name: 'info'
      },
      subsection: [
        {
          id: 1,
          order: 0,
          title: 'DevFest 2022',
          type_box: { id: 1, name: 'link' }
        },
        {
          id: 2,
          order: 1,
          title: 'DevFest 2023',
          type_box: { id: 2, name: 'link' }
        },
        {
          id: 3,
          order: 2,
          title: 'GDG Torino',
          type_box: { id: 3, name: 'link' }
        },
        {
          id: 4,
          order: 3,
          title: "",
          type_box: { id: 4, name: 'link' }
        }
      ]
    },
    {
      id: 2,
      order: 1,
      title: 'Event Resources',
      type_box: {
        id: 2,
        name: 'resources'
      },
      subsection: [
        {
          id: 5,
          order: 0,
          title: 'Proposal IT',
          type_box: { id: 5, name: 'form' }
        },
        {
          id: 6,
          order: 1,
          title: 'Proposal EN',
          type_box: { id: 6, name: 'form' }
        },
        {
          id: 7,
          order: 2,
          title: 'Call For Papers',
          type_box: { id: 7, name: 'info' }
        },
        {
          id: 8,
          order: 3,
          title: 'Call For Helpers',
          type_box: { id: 8, name: 'volunteer' }
        }
      ]
    },
    {
      id: 3,
      order: 2,
      title: 'Organized by',
      image: {
        src: '/images/organizers.png',
        title: '',
        caption: 'Event Organizers'
      },
      type_box: {
        id: 3,
        name: 'organizers'
      },
      subsection: [
        {
          id: 9,
          order: 0,
          title: '',
          content: 'info@gdgtorino.it',
          type_box: { id: 9, name: 'contact' }
        }
      ]
    }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedinIn, faGithub, faLink);
  }

}
