import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Course
} from 'src/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Input() editable: false;

  @Output() courseSelected = new EventEmitter < Course > ();
  @Output() courseEdited = new EventEmitter < Course > ();
  @Output() courseDeleted = new EventEmitter < Course > ();

  inFocus = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    event.preventDefault();
    this.course.price += 10;
    this.courseSelected.emit(this.course);
  }

  onMouseEnter() {
    this.inFocus = true;
  }

  onMouseLeave() {
    this.inFocus = false;
  }

  onEdit() {
    this.courseEdited.emit(this.course);
  }

  onDelete() {
    this.courseDeleted.emit(this.course);
  }

}
