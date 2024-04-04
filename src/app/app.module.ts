import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { ThemsListComponent } from './thems-list/thems-list.component';
import { PostsListComponent } from './posts-list/posts-list.component'
import { SharedModule } from './shared/shared.module'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemsListComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//test