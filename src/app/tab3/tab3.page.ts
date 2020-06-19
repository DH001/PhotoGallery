import {Component, OnInit} from '@angular/core';
import {CourseService, Price} from '../services/course.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  courses: Array<Course>;

  constructor(public courseService: CourseService) {}

  async ngOnInit() {
     this.courses = await this.courseService.getCourses();
  }

  unread() {}

}

export interface Course {
  id: number;
  code: string;
  benefits?: string;
  categories?: Array<string>;
  durationDays?: number;
  method?: string;
  prerequisites?: string;
  prices?: Price;
  summary?: string;
  title?: string;
  topics?: string;
}
