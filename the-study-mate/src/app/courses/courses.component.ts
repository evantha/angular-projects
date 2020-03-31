import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/course';
import { COURSE_LIST } from '../data/courses-list';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSE_LIST;

  constructor() { }

  ngOnInit(): void {
  }

  onCourseSelected (course: Course) {
    console.log(course.title + ' : ' + course.price)
  }

}
