import { MainPageVM } from './MainPageVM';
import { makeAutoObservable } from 'mobx';

export class MainPageVMImpl implements MainPageVM {
  constructor() {
    makeAutoObservable(this);
  }
}
