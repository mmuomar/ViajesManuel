import { Injectable } from '@angular/core';

@Injectable()
export class PaisesService {
  private paises: Pais[] = [
    {
      nombre: 'Alemania',
      capital: 'Berlín',
      img: 'assets/img/alemania.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Austria',
      capital: 'Viena',
      img: 'assets/img/austria.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Bélgica',
      capital: 'Bruselas',
      img: 'assets/img/belgica.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Bulgaria',
      capital: 'Sofia',
      img: 'assets/img/bulgaria.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Eslovaquia',
      capital: 'Bratislava',
      img: 'assets/img/eslovaquia.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'España',
      capital: 'Madrid',
      img: 'assets/img/espana.png',
      anyoVisita: '1993',
    },
    {
      nombre: 'Estados Unidos',
      capital: 'Washington DC',
      img: 'assets/img/estados-unidos.png',
      anyoVisita: '2011',
    },
    {
      nombre: 'Estonia',
      capital: 'Tallinn',
      img: 'assets/img/estonia.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Grecia',
      capital: 'Atenas',
      img: 'assets/img/grecia.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Hungría',
      capital: 'Budapest',
      img: 'assets/img/hungria.png',
      anyoVisita: '2018',
    },
    {
      nombre: 'Italia',
      capital: 'Roma',
      img: 'assets/img/italia.png',
      anyoVisita: '2009',
    },
    {
      nombre: 'Letonia',
      capital: 'Riga',
      img: 'assets/img/letonia.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Lituania',
      capital: 'Vilna',
      img: 'assets/img/lituania.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Países Bajos',
      capital: 'Ámsterdam',
      img: 'assets/img/paises-bajos.png',
      anyoVisita: '2019',
    },
    {
      nombre: 'Polonia',
      capital: 'Varsovia',
      img: 'assets/img/polonia.png',
      anyoVisita: '2018',
    },
    {
      nombre: 'Portugal',
      capital: 'Lisboa',
      img: 'assets/img/portugal.png',
      anyoVisita: '2004',
    },
    {
      nombre: 'Reino Unido',
      capital: 'Londres',
      img: 'assets/img/reino-unido.png',
      anyoVisita: '2010',
    },
    {
      nombre: 'República Checa',
      capital: 'Praga',
      img: 'assets/img/republica-checa.png',
      anyoVisita: '2018',
    },
  ];

  constructor() {
    console.log('Servicio ready');
  }

  getPaises():Pais[] {
    return this.paises;
  }

  getPais( idx: string ){
    return this.paises[idx];
  }

  buscarPaises( termino:string ) {

    let paisesArr:Pais[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.paises.length; i++ ){
      
      let pais = this.paises[i];

      let nombre = pais.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0 ) {
        pais.idx = i;
        paisesArr.push( pais );
      }
    }

    return paisesArr;
    
  }
}
export interface Pais {
  nombre: string;
  capital: string;
  img: string;
  anyoVisita: string;
  idx?: number;
}
