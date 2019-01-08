import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import {SummatyPipe} from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { JustButtonComponent } from './just-button/just-button.component';
import { TraversalComponent } from './transversal/traversal.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsCompomentComponent } from './posts-compoment/posts-compoment.component';
import {HttpModule} from '@angular/http';
import {PostsService} from './services/posts.service';
import {AppErrorHandler} from './common/app-error-handler';

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
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsCompomentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  // Here we need to register all the dependencies and components in this module are depenndent upon
  providers: [
    CoursesService,
    PostsService,
    {
      provide: ErrorHandler, // class we want to replace
      useClass: AppErrorHandler // new class we want to use
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
