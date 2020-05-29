import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { A2sCommModule } from 'a2s-comm';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { HttpClientMockComponent } from './http-client-mock/http-client-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackHoleComponent,
    HttpClientMockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A2sCommModule,
    SpaceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
