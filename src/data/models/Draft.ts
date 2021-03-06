import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { OnlineStudy } from './OnlineStudy';
import { Student } from './Student';
import { Public } from './Public';

export class Draft implements OnlineStudyStatus {
  private _onlineStudy: OnlineStudy;

  constructor(onlineStudy: OnlineStudy) {
    this._onlineStudy = onlineStudy;
  }

  isRegistrable(student: Student): boolean {
    this._onlineStudy.status = new Public(this._onlineStudy);
    return true;
  }

  isReviewable(): boolean {
    alert(`${this._onlineStudy.onlineStudyInfo.name} 수업은 아직 준비중입니다.`);
    return false;
  }
}
