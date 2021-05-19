import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Array<any> = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes()
  }

}
