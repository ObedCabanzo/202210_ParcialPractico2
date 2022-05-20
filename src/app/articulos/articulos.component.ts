import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit{


  active_link = ""
  articuloSeleccionado : Articulo = {} as Articulo;
  articulos: Array<Articulo> = [];
  avgPrice : number = 0;

  @Output() clickDetalle = new EventEmitter<Articulo>();


  constructor(private articuloService: ArticulosService) { }

  ngOnInit() {
    this.getArticulos();

  }

  getArticulos(){
    this.articuloService.getArticulos().subscribe(articulos =>{
      this.articulos =articulos
      console.log(articulos);

      let sumaPrecios: number = 0;
      for (let i in articulos) {
        sumaPrecios += articulos[i].price;
      }

      this.avgPrice = sumaPrecios / (articulos.length -1);

    } )

  }

  clickArticulo(articulo:Articulo){
    console.log(articulo)
    this.active_link = "articulo-detalle"
    this.articuloSeleccionado = articulo;
    this.clickDetalle.emit(articulo);
  }


}
