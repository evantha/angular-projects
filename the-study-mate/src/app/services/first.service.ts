import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/models/course';
import { CourseEditModalComponent } from '../components/my-courses/course-edit-modal/course-edit-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private modalService: NgbModal) {
    console.log('FirstService created');
  }

  public openModal(title: string, course: Course): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;
    return modalRef.result;
  }
}
