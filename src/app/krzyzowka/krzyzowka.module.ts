import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KrzyzowkaComponent } from './krzyzowka.component';
import { KrzyzowkaFormComponent } from './components/krzyzowka-form/krzyzowka-form.component';
import { KrzyzowkaViewComponent } from './containers/krzyzowka-view/krzyzowka-view.component';
import { RouterModule } from '@angular/router';
import { KrzyzowkaRoutingModule } from './krzyzowka-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KrzyzowkaComponent,
    KrzyzowkaFormComponent,
    KrzyzowkaViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    KrzyzowkaRoutingModule,
    FormsModule
  ]
})
export class KrzyzowkaModule { }
