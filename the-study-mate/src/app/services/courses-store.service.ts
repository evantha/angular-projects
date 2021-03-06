import { Injectable } from '@angular/core';
import { Course } from 'src/models/course';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


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

  constructor( private firestore: AngularFirestore) {
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  private generateId() : string {
    return this.firestore.createId();
  }

  getCourses() : Observable<Course[]> {
    return this.firestore.collection<Course>('courses').valueChanges();
  }

  createCourse(course: Course) {
    course.id = this.generateId();
    this.firestore.collection('courses').doc<Course>(course.id).set(course);
  }

  updateCourse(course: Course) {
    this.firestore.collection('courses').doc<Course>(course.id).set(course);
  }

  deleteCourse(course: Course) {
    this.firestore.collection('courses').doc<Course>(course.id).delete();
  }

  private getIndex(course: Course): number {
    return this.courses.findIndex(c => {
      return c.id === course.id;
    });
  }
}
