import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { ComponentsModule } from '../components/components.module';
import { ListComponent } from '../components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
