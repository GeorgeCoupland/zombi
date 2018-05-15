import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { SightingService } from './services/sighting.service';
import { ProfileService } from './services/profile.service';

import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [InitAuthGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'profile/:id', component: ProfilePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'add-location', component: AddLocationComponent, canActivate: [RequireUserGuardService] },
  { path: 'map', component: MapPageComponent, canActivate: [RequireUserGuardService] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    ProfilePageComponent,
    MapPageComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvxEFnvzJZwdIjF_ztKYyO9D8b8mRxNJg'
    })
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    ProfileService,
    SightingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
