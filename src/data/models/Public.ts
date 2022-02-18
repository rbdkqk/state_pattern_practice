import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { OnlineStudy } from './OnlineStudy';
import { Student } from './Student';
import { Private } from './Private';

export class Public implements OnlineStudyStatus {
  private _onlineStudy: OnlineStudy;

  constructor(onlineStudy: OnlineStudy) {
    this._onlineStudy = onlineStudy;
  }

  isRegistrable(student: Student): boolean {
    if (this._onlineStudy.isSignedUpStudent(student)) {
      alert(`이미 ${this._onlineStudy.onlineStudyInfo.name} 수업에 등록된 학생입니다.`);
      return false;
    }

    const {
      maxStudentCount: maxCount,
      currentStudentsCount: currentCount,
      name,
    } = this._onlineStudy.onlineStudyInfo;
    if (currentCount === maxCount - 1) {
      this._onlineStudy.status = new Private(this._onlineStudy);
    }

    return true;
  }

  isReviewable(): boolean {
    // 이미 리뷰를 작성했는지 확인하는 등의 추가작업 필요
    return true;
  }
}
