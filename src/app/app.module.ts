import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {CommonModule} from '@angular/common';
import {CoursesService} from './courses.service';
import {SummatyPipe} from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';

@NgModule({
  // add all the comoponents of tis module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummatyPipe,
    FavoritesComponent,
    BootstrapPanelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  // Here we need to register all the dependencies and components in this module are depenndent upon
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
