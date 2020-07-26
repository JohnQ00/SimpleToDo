import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'tos',
    loadChildren: () => import('./tos/tos.module').then( m => m.TosPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'task',
        children: [
          {
            path: '',
            loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
          }
        ]
      },
      {
        path: 'done',
        children: [
          {
            path: '',
            loadChildren: () => import('./done/done.module').then( m => m.DonePageModule)
          }
        ]
      },
      {
        path: 'later',
        children: [
          {
            path: '',
            loadChildren: () => import('./later/later.module').then( m => m.LaterPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/task',
        pathMatch: 'full'
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
