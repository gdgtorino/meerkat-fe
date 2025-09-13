import { Component } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faLinkedinIn, faGithub, faLink);
  }

}
