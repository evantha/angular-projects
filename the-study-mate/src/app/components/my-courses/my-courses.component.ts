import { Component, OnInit } from '@angular/core';
import { COURSE_LIST, ID_GENERATOR } from '../../data/courses-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';
import { Course } from 'src/models/course';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courseList: Course[];

  constructor(
    private modalService: NgbModal,
    private courseStore: CoursesStoreService,
    private courseHelperService : FirstService
  ) {}

  ngOnInit(): void {
    this.courseStore.getCourses().subscribe((newCourses: Course[]) => {
      this.courseList = newCourses;
      console.log('MyCoursesComponent:ngOnInit' , newCourses);
    });
  }

  onCreateCourse() {
    // this.openModal('Create Course', {
    //   title: '',
    //   description: '',
    //   price: null
    // } as Course).then(
    //   value => console.log('value', value),
    //   reason => console.log(reason)
    // );

    this.courseHelperService.openModal('Create Course', {
      title: '',
      description: '',
      price: null
    } as Course);
  }

  // private openModal(title: string, course: Course): Promise<any> {
  //   const modalRef = this.modalService.open(CourseEditModalComponent);
  //   modalRef.componentInstance.modalTitle = title;
  //   modalRef.componentInstance.course = course;
  //   return modalRef.result;
  // }

  // onCourseEdited(course: Course) {
  //   // console.log(course.title);
  //   // this.openModal(course.title, course).then(
  //   //   value => {
  //   //     this.courseStore.updateCourse(value);
  //   //   },
  //   //   reason => console.log(reason)
  //   // );
  //   this.courseHelperService.openModal(course.title, course);
  // }

  // onCourseDeleted(course: Course) {
  //   this.courseHelperService.openModal(course.title, course);
  //   // this.openModal(course.title, course).then(
  //   //   value => {
  //   //     this.courseStore.deleteCourse(value);
  //   //   },
  //   //   reason => console.log(reason)
  //   // );
  // }
}
