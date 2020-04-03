import { Injectable } from '@angular/core';
import { Course } from 'src/models/course';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  courses = [
    {
      id: this.generateId(),
      title: 'Angular workshop',
      price: 50,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'React Workshop',
      price: 60,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'Vue Workshop',
      price: 20,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    }
  ];

  coursesObservable: Subject<Course[]>;

  constructor() {
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  private generateId() : number {
    return Math.round(Math.random() * 10000);
  }

  getCourses() : Observable<Course[]> {
    return this.coursesObservable;
  }

  createCourse(course: Course) {
    course.id = this.generateId();
    this.courses.push(course);
    this.coursesObservable.next([...this.courses]);
  }

  updateCourse(course: Course) {
    const idx = this.getIndex(course);
    this.courses[idx] = course;
    this.coursesObservable.next([...this.courses]);
  }

  deleteCourse(course: Course) {
    const idx = this.getIndex(course);
    this.courses.splice(idx, 1);
    this.coursesObservable.next([...this.courses]);
  }

  private getIndex(course: Course): number {
    return this.courses.findIndex(c => {
      return c.id === course.id;
    });
  }
}
