import { Injectable } from '@angular/core';
import {Course} from '../tab3/tab3.page';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Promise<Array<Course>>;

  constructor() { }

  getCourses(): Promise<Array<Course>> {
    if (this.courses) {
      return this.courses;
    }

    // Get from backend
    const course1: Course = { id: 1, code: 'AM-400', title: 'AM Basics', summary: 'A look at Access Manager basics',
      prices: {price: 1500, currencyCode: 'GBP'} };
    const course2: Course = { id: 1, code: 'IDM-120', title: 'IDM Configuration', summary: 'How to configure IDM',
      prices: {price: 150, currencyCode: 'GBP'} };
    const course3: Course = { id: 1, code: 'FIP_INTRO', title: 'Introduction to FR products', summary: 'FR Basics',
      prices: {price: 100, currencyCode: 'USD'} };
    this.courses = Promise.all([ course1, course2, course3 ]);
    return this.courses;
  }
}

export interface Price {
  currencyCode: string;
  price: number;
}

