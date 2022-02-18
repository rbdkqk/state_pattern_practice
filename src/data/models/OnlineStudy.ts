import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { Student } from './Student';
import { DEFAULT_MAX_STUDENT_COUNT } from '../etc/constants';
import { Draft } from './Draft';

export class OnlineStudy {
  private _name: string;
  private _status: OnlineStudyStatus;
  private _maxStudentCount: number;
  private _students: Student[];
  private _reviews: string[]; // 별도의 모델이 필요할까?

  constructor(params: { name: string; status?: OnlineStudyStatus; maxStudentCount?: number }) {
    this._name = params.name;
    this._status = params.status = new Draft(this);
    this._maxStudentCount = params.maxStudentCount = DEFAULT_MAX_STUDENT_COUNT;
    this._students = [];
    this._reviews = [];
  }

  get onlineStudyInfo(): {
    name: string;
    maxStudentCount: number;
    currentStudentsCount: number;
  } {
    return {
      name: this._name,
      maxStudentCount: this._maxStudentCount,
      currentStudentsCount: this._students.length,
    };
  }

  set status(status: OnlineStudyStatus) {
    this._status = status;
  }

  registStudent(student: Student): void {
    if (this._status.isRegistrable(student)) {
      this._students.push(student);
    }
  }

  writeReview(review: string) {
    if (this._status.isReviewable()) {
      this._reviews.push(review);
    }
  }

  isSignedUpStudent(student: Student): boolean {
    return this._students.find((s) => s.studentInfo.id === student.studentInfo.id) !== undefined;
  }
}
