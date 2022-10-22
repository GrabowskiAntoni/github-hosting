import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { StartViewComponent } from './containers/start-view/start-view.component';
import { RouterModule } from '@angular/router'
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  declarations: [
    StartComponent,
    StartViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StartRoutingModule,
    
  ]
})
export class StartModule { }
