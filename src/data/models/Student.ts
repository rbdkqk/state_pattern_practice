import { OnlineStudy } from './OnlineStudy';
import { studentIdGenerator } from '../etc/idGenerator';

export class Student {
  private _id: number;
  private _name: string;
  private registeredOnlineStudies: OnlineStudy[];

  constructor(params: { name: string }) {
    this._id = studentIdGenerator();
    this._name = params.name;
    this.registeredOnlineStudies = [];
  }

  get studentInfo(): { id: number; name: string } {
    return { id: this._id, name: this._name };
  }

  // 학생이 스스로 수강신청
  registerOnlineStudy(onlineStudy: OnlineStudy) {
    onlineStudy.registerStudent(this, () => this.registeredOnlineStudies.push(onlineStudy));
  }

  // 학생이 스스로 수강철회(?)
  unregisterOnlineStudy(onlineStudy: OnlineStudy) {
    const index = this.registeredOnlineStudies.findIndex(
      (s) => s.onlineStudyInfo.id === onlineStudy.onlineStudyInfo.id
    );

    this.registeredOnlineStudies = [
      ...this.registeredOnlineStudies.slice(0, index),
      ...this.registeredOnlineStudies.slice(index + 1),
    ];

    onlineStudy.unregisterStudent(this);
  }

  // isListeningOnlineStudy = (onlineStudy: OnlineStudy): boolean => {};

  // signUpForOnlineStudy = () => {};
}
