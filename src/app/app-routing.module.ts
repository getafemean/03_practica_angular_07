import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './compras/compras.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ventas', children: [
      {path: 'listado-clientes', component: ListadoClientesComponent},
      {path: 'crear-cliente', component: CrearClienteComponent}
  ]},
  {path: 'compras', component: ComprasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
