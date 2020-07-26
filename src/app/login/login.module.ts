import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { RouterModule, Routes } from '@angular/router';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/tos',
  privacyPolicyUrl: '/privacy',
};

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RouterModule.forChild(routes),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  declarations: [LoginPage],
  entryComponents: [LoginPage],
})
export class LoginPageModule {}
