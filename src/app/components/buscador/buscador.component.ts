import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from './../../servicios/paises.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  paises:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _paisesService: PaisesService) {

   }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.paises = this._paisesService.buscarPaises(this.termino);
    })
  }

}
