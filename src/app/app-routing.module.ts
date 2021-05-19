import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './compras/compras.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';
import { VisualizarClienteComponent } from './ventas/visualizar-cliente/visualizar-cliente.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ventas', children: [
      {path: 'listado-clientes', component: ListadoClientesComponent, data: {title: 'Listado de Clientes'}},
      {path: 'crear-cliente', component: CrearClienteComponent},
      // {path: 'visualizar-cliente/:id', component: VisualizarClienteComponent}
      // Opción con parámetros de consulta
      {path: 'visualizar-cliente', component: VisualizarClienteComponent}

  ]},
  {path: 'compras', component: ComprasComponent},
  {
    path: 'recursos-humanos', 
    loadChildren: () => import('./recursos-humanos/recursos-humanos.module').then(m => m.RecursosHumanosModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
