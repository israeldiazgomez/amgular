import { Component, OnInit } from '@angular/core';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';
import { TipoProductoI } from 'src/app/models/TipoProductoI';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-create-tipo-producto',
  templateUrl: './create-tipo-producto.component.html',
  styleUrls: ['./create-tipo-producto.component.css']
})
export class CreateTipoProductoComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    correo: ['', Validators.required],
    clave: ['', Validators.required]
  })
  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    const formValue: TipoProductoI = this.formulario.value;
    this.tipoProductoService.create(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Registro creado Exitosamente ', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/tipoproducto');
      },
      err => {
        this.snackBar.open(
          'Sorry no fue creado exitosamente ', 'PAILAS', {
            duration: 5000,
          }
        )
          
      }
    )

  }

}
