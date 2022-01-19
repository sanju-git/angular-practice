import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'user/:id', component: UsersComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
