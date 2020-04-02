import { Component, OnInit } from '@angular/core';
import { COURSE_LIST, ID_GENERATOR } from '../../data/courses-list';
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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onCreateCourse() {
    this.openModal('Create Course', {
      id: ID_GENERATOR(),
      title: '',
      description: '',
      price: null
    } as Course).then(
      value => this.courseList.push(value),
      reason => console.log(reason)
    );
  }

  private openModal(title: string, course: Course): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }

  onCourseEdited(course: Course) {
    console.log(course.title);
    this.openModal(course.title, course).then(
      value => {
        const id = this.getIndex(value);
        console.log('onCourseEdited', id);
        this.courseList[id] = value;
      },
      reason => console.log(reason)
    );
  }

  onCourseDeleted(course: Course) {
    this.openModal(course.title, course).then(
      value => {
        const id = this.getIndex(value);
        console.log('onCourseDeleted', id);
        this.courseList.splice(id, 1);
      },
      reason => console.log(reason)
    );
  }

  private getIndex(course: Course): number {
    return this.courseList.findIndex(c => {
      return c.id === course.id;
    });
  }
}
