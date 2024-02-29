import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);


  ngOnInit() {}


  constructor (private menuCtrl: MenuController) {}
  signOut(){
    this.firebaseSvc.signOut();
    this.menuCtrl.close();
  }
}
