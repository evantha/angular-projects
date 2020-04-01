import { Component, OnInit } from '@angular/core';
import { COURSE_LIST} from '../../data/courses-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  courseList = COURSE_LIST;

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreateCourse(){
    this.openModal('Create Course', {} as Course)
  }

  private openModal(title: string, course: Course) {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;

    modalRef.result.then(
      (value) => console.log(value),
      (reason) => console.log(reason)
    );
  }

  onCourseEdited(course: Course) {
    console.log(course.title);
    this.openModal(course.title, course);
  }

  onCourseDeleted(course:Course){
    console.log(course.title);
    this.openModal(course.title, course);
  }

}
