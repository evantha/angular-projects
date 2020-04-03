import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/course';
import { COURSE_LIST } from '../../../data/courses-list';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private courseStore: CoursesStoreService) {}

  ngOnInit(): void {
    this.courseStore
      .getCourses()
      .subscribe((newCourses: Course[]) => (this.courses = newCourses));
  }

  onCourseSelected(course: Course) {
    console.log(course.title + ' : ' + course.price);
  }
}
