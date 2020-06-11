import { Component, OnInit, NgProbeToken } from '@angular/core';
import { PaisesService, Pais } from './../../servicios/paises.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {
  paises: Pais[] = [];
  constructor(private _paisesService: PaisesService, private router: Router) {}

  ngOnInit(): void {
    this.paises = this._paisesService.getPaises();
  }

  verPais(idx: number) {
    this.router.navigate(['/pais', idx]);
  }
}
