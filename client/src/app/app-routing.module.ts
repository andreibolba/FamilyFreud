import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './administration/admin/admin.component';
import { RoundComponent } from './game/round/round.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, pathMatch: 'full' },
  { path: 'start', component: RoundComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
