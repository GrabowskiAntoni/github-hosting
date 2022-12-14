import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'start',
    loadChildren: () => import('./start/start.module')
      .then(m => m.StartModule)
  },
  {
    path: 'krzyzowka',
    loadChildren: () => import('./krzyzowka/krzyzowka.module')
      .then(m => m.KrzyzowkaModule)
  },
  {
    path: '**',
    redirectTo:'start',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
