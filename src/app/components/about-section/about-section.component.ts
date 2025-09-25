import { Component } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ItemModel } from '../../_shared/models/common.model';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }

  //TODO: cambiare con i model di feat/headline
  sectionData: ItemModel = {
    id: 1,
    order: 0,
    title: "What's DevFest Alps?",
    subtitle: '',
    brief:
      'DevFest Alps 2024 is the event that brings together developers, designers, and tech enthusiasts in the heart of the Italian Alps.',
    content: '',
    background: {
      id: 1,
      is_image: false,
      color: '#ffffff',
    },
    type_box: {
      id: 1,
      name: 'info-section',
    },
    subsection: [
      {
        id: 1,
        order: 0,
        title: 'Sessions',
        subtitle: '',
        brief: '20+',
        content: '',
        background: {
          id: 1,
          is_image: true,
          image: {
            id: 1,
            src: '/images/sessions.png',
            title: 'Sessions Background',
            caption: 'DevFest Sessions',
          },
          color: '#f0f0f0',
        },
        type_box: { id: 1, name: 'stat-card' },
      },
      {
        id: 2,
        order: 1,
        title: 'Attendees',
        subtitle: '',
        brief: '250+',
        content: '',
        background: {
          id: 2,
          is_image: true,
          image: {
            id: 2,
            src: '/images/attendees.png',
            title: 'Attendees Background',
            caption: 'DevFest Community',
          },
          color: '#f0f0f0',
        },
        type_box: { id: 2, name: 'stat-card' },
      },
      {
        id: 3,
        order: 2,
        title: 'Speakers',
        subtitle: '',
        brief: '20+',
        content: '',
        background: {
          id: 3,
          is_image: true,
          image: {
            id: 3,
            src: '/images/speakers.png',
            title: 'Speakers Background',
            caption: 'DevFest Speakers',
          },
          color: '#f0f0f0',
        },
        type_box: { id: 3, name: 'stat-card' },
      },
      
      {
        id: 4,
        order: 3,
        title: 'Tracks',
        subtitle: '',
        brief: '3',
        content: '',
        background: {
          id: 4,
          is_image: true,
          image: {
            id: 4,
            src: '/images/tracks.png',
            title: 'Tracks Background',
            caption: 'DevFest Tracks',
          },
          color: '#f0f0f0',
        },
        type_box: { id: 4, name: 'stat-card' },
      },
    ],
  };
}
