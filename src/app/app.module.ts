import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import {NgxSmoothScrollModule} from '@boatzako/ngx-smooth-scroll';
import {SkillsComponent} from './components/skills/skills.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    FloatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
