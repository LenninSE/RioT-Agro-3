import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firbeseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);
  // MenuController: any;

  ngOnInit() {
  }

  //===== cerrar sesion======//
  // signOut(){
  //   this.firbeseSvc.signOut();
  // }


  constructor(private menuCtrl: MenuController) {}
  openMenu(){

    this.menuCtrl.toggle();
    
  }

}
