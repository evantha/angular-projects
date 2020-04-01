import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/models/course';
import { COURSE_LIST} from '../../data/courses-list';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;


  constructor( private thisRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const title = this.thisRoute.snapshot.paramMap.get('id');

    this.course = COURSE_LIST.find((c)=> {
      return c.title === title;
    })
  }

}
