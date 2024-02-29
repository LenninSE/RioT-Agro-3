import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//-----forebase-------//
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// menu
import { MenuComponent } from './shared/components/menu/menu.component';



@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
     BrowserModule,
     IonicModule.forRoot({mode: 'md'}), 
     AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)],

    //==== exportar menu ========//
  exports: [MenuComponent ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
