import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosComponent } from './articulos.component';
import { Detalle_articuloComponent } from '../componentes/detalle_articulo/detalle_articulo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticulosComponent,Detalle_articuloComponent],
  exports: [ArticulosComponent]
})
export class ArticulosModule {


}
