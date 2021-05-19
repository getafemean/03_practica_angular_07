import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Array<any> = [
    {id: 'dfhdgf', nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {id: 'gafsd5', nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {id: 'hcdgs4', nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
  ]

  constructor() { }

  getClientes(): Array<any> {
    return this.clientes;
  } 

  setCliente(cliente: any): void {
    this.clientes.push(cliente);
  }

}
