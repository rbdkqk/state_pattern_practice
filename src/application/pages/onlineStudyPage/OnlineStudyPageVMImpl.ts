import { makeAutoObservable } from 'mobx';
import { OnlineStudyPageVM } from './OnlineStudyPageVM';

export class OnlineStudyPageVMImpl implements OnlineStudyPageVM {
  constructor() {
    makeAutoObservable(this);
  }
}
