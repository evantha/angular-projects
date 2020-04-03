import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  ElementRef
} from '@angular/core';
import {
  Course
} from 'src/models/course';
import { FirstService } from 'src/app/services/first.service';

const DEBUG = false;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // providers: [FirstService]
})
export class CourseComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  @Input() course: Course;
  @Input() editable: false;

  @Output() courseSelected = new EventEmitter < Course > ();
  @Output() courseEdited = new EventEmitter < Course > ();
  @Output() courseDeleted = new EventEmitter < Course > ();

  inFocus = false;

  constructor( private el: ElementRef<HTMLElement>, private firstService: FirstService) {
    this.logIt('constructor');
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }

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

  logIt(checkpoint: string) {
    if (DEBUG) {
      console.log(
        'args at ' + checkpoint + ' - ' + JSON.stringify(this.course)
      );
      console.log(
        'view at ' + checkpoint + ' - ' + this.el.nativeElement.textContent
      );
    }
  }

}
