import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { ShowTipoProductoComponent } from './components/tipoProducto/show-tipo-producto/show-tipo-producto.component';
import { CreateTipoProductoComponent } from './components/tipoProducto/create-tipo-producto/create-tipo-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { TipoProductoService } from './services/tipo-producto.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowTipoProductoComponent,
    CreateTipoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    TipoProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
