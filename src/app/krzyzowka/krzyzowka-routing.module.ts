import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { KrzyzowkaViewComponent } from './containers/krzyzowka-view/krzyzowka-view.component';
import { KrzyzowkaComponent } from './krzyzowka.component';

const routes: Routes = [
  // localhost/playlists/...
  {
    path: '',
    component: KrzyzowkaComponent,
    children:[
      {
        path:'',
        component: KrzyzowkaViewComponent
      }
    ]
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KrzyzowkaRoutingModule {}
