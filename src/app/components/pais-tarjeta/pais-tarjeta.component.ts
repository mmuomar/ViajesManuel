import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-tarjeta',
  templateUrl: './pais-tarjeta.component.html'
})
export class PaisTarjetaComponent implements OnInit {

  @Input() pais: any = {};
  @Input() index: number;

  @Output() paisSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.paisSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }


  verPais() {
    this.router.navigate(['/pais', this.index]);
    //this.paisSeleccionado.emit( this.index );
  }

}
