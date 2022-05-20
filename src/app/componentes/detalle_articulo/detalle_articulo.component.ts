import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/articulo';

@Component({
  selector: 'app-detalle_articulo',
  templateUrl: './detalle_articulo.component.html',
  styleUrls: ['./detalle_articulo.component.css']
})
export class Detalle_articuloComponent implements OnInit {

  activo:string = "detalle_articulo";
  imageUrl:String = "";
  @Input() public articulo:Articulo = {} as Articulo;
  constructor() { }

  ngOnInit() {
    this.imageUrl = this.articulo.image;
  }

}
