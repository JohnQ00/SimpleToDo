import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any = {};

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        console.log(user.photoURL);
      }
    });
   }

  ngOnInit() {
  }

  signOut(){
    this.afAuth.signOut().then(() => {
      location.reload();
    });
  }

}
