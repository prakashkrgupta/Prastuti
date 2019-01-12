import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ServicesComponent } from './components/services/services.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ImageViewerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
