import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRRHHComponent } from './inicio-rrhh/inicio-rrhh.component';
import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';

@NgModule({
  declarations: [
    InicioRRHHComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule
  ]
})

export class RecursosHumanosModule { }
