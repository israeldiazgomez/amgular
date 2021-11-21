import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTipoProductoComponent } from './components/tipoProducto/create-tipo-producto/create-tipo-producto.component';
import { ShowTipoProductoComponent } from './components/tipoProducto/show-tipo-producto/show-tipo-producto.component';

const routes: Routes = [
  {
    path: "tipoproducto",
    component: ShowTipoProductoComponent
  },
  {
    path: "crearTipoProducto",
    component: CreateTipoProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
