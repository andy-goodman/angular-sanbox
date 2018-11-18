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
import { JustButtonComponent } from './just-button/just-button.component';
import { TraversalComponent } from './transversal/traversal.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule, NgModel} from '@angular/forms';

@NgModule({
  // add all the components, pipes and directives of tis module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummatyPipe,
    FavoritesComponent,
    BootstrapPanelComponent,
    JustButtonComponent,
    TraversalComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Here we need to register all the dependencies and components in this module are depenndent upon
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
