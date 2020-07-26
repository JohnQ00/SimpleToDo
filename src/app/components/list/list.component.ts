import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  items = [];
  @Input('title') title;
  @Input('name') name;
  @Input('allowDone') allowDone: boolean;
  @Input('allowTask') allowTask: boolean;
  @Input('allowLater') allowLater: boolean;
  
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(async user => {
      if(!user) 
        return;
      this.db.collection(`users/${(await this.afAuth.currentUser).uid}/${this.name}`, ref => {
        return ref.orderBy('pos', 'desc');
      }).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          let item = a.payload.doc.data();
          item['id'] = a.payload.doc.id;
          this.items.push(item);
        });
        });
    })
  }

  async add(){

    const alert = await this.alertCtrl.create({
      header: 'New task',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
        },
        {
          text: 'Ok',
          handler: async (val) => {
            console.log('Confirm Ok');
            let now = new Date();
            let nowUtc = new Date(Date.UTC
              (now.getUTCFullYear(),
               now.getUTCMonth(), 
               now.getUTCDate(), 
               now.getUTCHours(),
               now.getUTCMinutes(),
               now.getUTCSeconds()));
            this.db.collection(`users/${(await this.afAuth.currentUser).uid}/${this.name}`).add({
              text: val.task,
              pos: this.items.length ? this.items[0].pos + 1 : 0,
              created: nowUtc,
            });
          }
        }
      ],
      inputs: [
        {
        name: 'task',
        type: 'text',
        placeholder: 'My task'
        },
    ]
    });
    return await alert.present();
  }

  task(item){
    this.moveItem(item, 'task');
  }

  async delete (item){
    this.db.doc(`users/${(await this.afAuth.currentUser).uid}/${this.name}/${item.id}`).delete();
  }

  async complete (item){
    this.moveItem(item, 'done');
  }

  async later (item){
    this.moveItem(item, 'later');
  }

  async moveItem(item, list: string){
    this.db.doc(`users/${(await this.afAuth.currentUser).uid}/${this.name}/${item.id}`).delete();
    let id = item.id;
    delete item.id;
    this.db.collection(`users/${(await this.afAuth.currentUser).uid}/${list}`, ref => {
      return ref.orderBy('pos', 'desc').limit(1);
    }).get().toPromise().then(async qSnap => {
      item.pos = 0;
      qSnap.forEach(a => {
        item.pos = a.data().pos + 1;
      });
      this.db.doc(`users/${(await this.afAuth.currentUser).uid}/${list}/${id}`).set(item);
    });
  }
  


}
