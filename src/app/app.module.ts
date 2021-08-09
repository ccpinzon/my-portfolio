import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import {NgxSmoothScrollModule} from '@boatzako/ngx-smooth-scroll';
import {SkillsComponent} from './components/skills/skills.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    FloatButtonComponent,
    ExperienceComponent,
    FooterComponent
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
