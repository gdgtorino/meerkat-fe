import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, NgOptimizedImage],
  exports: [FontAwesomeModule, NgOptimizedImage]
})
export class SharedModule {}
