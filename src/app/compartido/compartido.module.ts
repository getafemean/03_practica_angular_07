import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadFadeDirective } from './load-fade.directive';


@NgModule({
  declarations: [
    LoadFadeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadFadeDirective
  ]
})

export class CompartidoModule { }
