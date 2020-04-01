import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { CourseComponent } from './components/home/courses/course/course.component';
import { HighlightableDirective } from './directives/highlightable.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { HomeComponent } from './components/home/home.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { NotImplementedComponent } from './components/not-implemented/not-implemented.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BackHomeButtonComponent } from './components/back-home-button/back-home-button.component';

const ROUTES : Routes = [
  {path: "home" , component: HomeComponent},
  {path: "contact" , component: NotImplementedComponent},
  {path: "about" , component: NotImplementedComponent},
  {path: "course-details" , component: CourseDetailsComponent},
  {path: "my-courses" , component: MyCoursesComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    FiltersComponent,
    CoursesComponent,
    CourseComponent,
    HighlightableDirective,
    EllipsisPipe,
    HomeComponent,
    MyCoursesComponent,
    ContactComponent,
    AboutComponent,
    NotImplementedComponent,
    PageNotFoundComponent,
    BackHomeButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
