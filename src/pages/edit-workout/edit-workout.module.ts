import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditWorkoutPage } from './edit-workout';

@NgModule({
  declarations: [
    EditWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(EditWorkoutPage),
  ],
})
export class EditWorkoutPageModule {}
