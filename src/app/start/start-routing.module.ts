import { NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { StartViewComponent } from './containers/start-view/start-view.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    children:[
      {
        path:'',
        component: StartViewComponent
      }
    ]
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StartRoutingModule {}