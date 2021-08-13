import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AnimalService } from './shared/animal.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CreateAndUpdateComponent } from './components/create-and-update/create-and-update.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReadAndDeleteComponent } from './components/read-and-delete/read-and-delete.component';
import { RegisterComponent } from './components/register/register.component';
import { TokenInterceptorService } from './token-interceptor.service';

const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: '', component: RegisterComponent },
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
  declarations: [
    AppComponent,
    CreateAndUpdateComponent,
    ReadAndDeleteComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AnimalService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
