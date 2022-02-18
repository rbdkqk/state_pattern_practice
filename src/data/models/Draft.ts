import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { OnlineStudy } from './OnlineStudy';
import { Student } from './Student';

export class Draft implements OnlineStudyStatus {
  private _onlineStudy: OnlineStudy;

  constructor(onlineStudy: OnlineStudy) {
    this._onlineStudy = onlineStudy;
  }

  get onlineStudy(): OnlineStudy {
    return this._onlineStudy;
  }

  isRegistrable(student: Student): boolean {
    alert(`${this.onlineStudy.onlineStudyInfo.name} 수업은 아직 준비중입니다.`);
    return false;
  }

  isReviewable(): boolean {
    alert(`${this.onlineStudy.onlineStudyInfo.name} 수업은 아직 준비중입니다.`);
    return false;
  }
}
