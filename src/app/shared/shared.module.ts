import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlerComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    AlerComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports: [
    AlerComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlerComponent]
})
export class SharedModule {}
