import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


//Servicios
import { PaisesService } from './servicios/paises.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PaisesComponent } from './components/paises/paises.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { PaisComponent } from './components/pais/pais.component';
import { SafePipe } from './safe.pipe';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PaisTarjetaComponent } from './components/pais-tarjeta/pais-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PaisesComponent,
    PaisComponent,
    SafePipe,
    BuscadorComponent,
    PaisTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
