import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hub/:hubId',
    children: [
      {
        path: '',
        loadChildren: () => import("./agency-profile/agency-profile.module").then(m => m.AgencyProfileModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
