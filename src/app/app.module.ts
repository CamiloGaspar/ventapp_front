import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { ProductosComponent } from './productos/productos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { MaterialesComponent } from './materiales/materiales.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    ComprasComponent,
    ProductosComponent,
    CuentasComponent,
    MaterialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
