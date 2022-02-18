import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { OnlineStudy } from './OnlineStudy';
import { Student } from './Student';

export class Private implements OnlineStudyStatus {
  private _onlineStudy: OnlineStudy;

  constructor(onlineStudy: OnlineStudy) {
    this._onlineStudy = onlineStudy;
  }

  isRegistrable(student: Student): boolean {
    alert(`${this._onlineStudy.onlineStudyInfo.name} 수업의 정원이 초과되었습니다.`);
    return false;
  }

  isReviewable(): boolean {
    // 이미 리뷰를 작성했는지 확인하는 등의 추가작업 필요
    return true;
  }
}
