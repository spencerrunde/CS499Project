import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';
import { CreateAndUpdateComponent } from './components/create-and-update/create-and-update.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { ReadAndDeleteComponent } from './components/read-and-delete/read-and-delete.component';
import { RegisterComponent } from './components/register/register.component';

// Defining routes to be used by the angular app
const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', component: RegisterComponent }, // Register is treated as the "home" page of the website
  {
    path: 'ReadAndDelete',
    component: ReadAndDeleteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'CreateAndUpdate',
    component: CreateAndUpdateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
