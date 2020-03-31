import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course = {
    title: 'Angular Workshop',
    price: 50,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
    starRating: 4
  }

  constructor() {}

  ngOnInit(): void {
/*     setInterval(() => {
      this.course.price = Math.round(Math.random() * 100);
    }, 1000); */
  }

  onClick(event: Event) {
    event.preventDefault();
    console.log('clicked');
    this.course.price += 10;
  }

}
