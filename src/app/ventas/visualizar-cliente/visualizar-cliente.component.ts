import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.scss']
})
export class VisualizarClienteComponent implements OnInit {

  id: string = '';
  cliente: any;

  constructor(private route: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params.id;
    // Opción con parámetros de consulta
    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams.id
    })
    this.cliente = this.clientesService.getCliente(this.id);
  }

}
