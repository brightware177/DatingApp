import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SharedModule } from './_modules/shared.module';
import { MenuListItemComponent } from './_wrappers/ui/menu-list-item/menu-list-item.component';
import { WrapperComponent } from './_wrappers/ui/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    MenuListItemComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
