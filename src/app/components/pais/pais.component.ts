import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PaisesService } from './../../servicios/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html'
})
export class PaisComponent{

  pais:any = {};
  url2:string;


  constructor( private activatedRoute:ActivatedRoute,
               private _paisesService: PaisesService 
               ) {

    this.activatedRoute.params.subscribe( params => {
      this.pais = this._paisesService.getPais( params ['id']);
    } );

    this.url2 = `https://www.google.com/maps?q=${this.pais.capital},${this.pais.nombre}&output=embed`;
   }

   getUrl2(){
     return this.url2;
   }
}
