import { Component, OnInit } from '@angular/core';
import { TipoProductoI } from 'src/app/models/TipoProductoI';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-tipo-producto',
  templateUrl: './show-tipo-producto.component.html',
  styleUrls: ['./show-tipo-producto.component.css']
})
export class ShowTipoProductoComponent implements OnInit {
  public tipoProductos: TipoProductoI[] = []
  public displayedColumns: string[] = ["id", "nombre", "apellido", "correo", "clave"]

  constructor(
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarTipoProducto()
  }
  mostrarTipoProducto() {
    this.tipoProductoService.getAll() 
    .subscribe({
      next: (data) => {
        this.tipoProductos = data
        // console.log(data)
      }
    })
  }

}
