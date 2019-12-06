import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './ventas/ventas.component';
import { ComprasComponent } from './compras/compras.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: "ventas",
    component: VentasComponent
  },
  {
    path: "compras",
    component: ComprasComponent
  },
  {
    path: "cuentas",
    component: CuentasComponent
  },
  {
    path: "materiales",
    component: MaterialesComponent
  },
  {
    path: "productos",
    component: ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
