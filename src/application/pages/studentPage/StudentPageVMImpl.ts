import { OnlineStudyPageVM } from '../onlineStudyPage/OnlineStudyPageVM';
import { makeAutoObservable } from 'mobx';

export class StudentPageVMImpl implements OnlineStudyPageVM {
  constructor() {
    makeAutoObservable(this);
  }
}
