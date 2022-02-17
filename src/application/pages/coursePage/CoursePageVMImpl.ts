import { makeAutoObservable } from 'mobx';
import { CoursePageVM } from './CoursePageVM';

export class CoursePageVMImpl implements CoursePageVM {
  constructor() {
    makeAutoObservable(this);
  }
}
