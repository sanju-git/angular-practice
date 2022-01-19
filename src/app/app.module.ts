import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UsersComponentComponent } from './users-component/users-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    HomeComponentComponent,
    UsersComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
