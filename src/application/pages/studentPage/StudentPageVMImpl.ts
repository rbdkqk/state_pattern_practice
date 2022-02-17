import { CoursePageVM } from '../coursePage/CoursePageVM';
import { makeAutoObservable } from 'mobx';

export class StudentPageVMImpl implements CoursePageVM {
  constructor() {
    makeAutoObservable(this);
  }
}
