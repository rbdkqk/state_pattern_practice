import { OnlineStudyStatus } from './interfaces/OnlineStudyStatus';
import { Student } from './Student';
import { DEFAULT_MAX_STUDENT_COUNT } from '../etc/constants';
import { Draft } from './Draft';
import { onlineStudyIdGenerator } from '../etc/idGenerator';

export class OnlineStudy {
  private _id: number;
  private _name: string;
  private _status: OnlineStudyStatus;
  private _maxStudentCount: number;
  private _students: Student[];
  private _reviews: string[]; // 별도의 모델이 필요할까?

  constructor(params: { name: string; status?: OnlineStudyStatus; maxStudentCount?: number }) {
    this._id = onlineStudyIdGenerator();
    this._name = params.name;
    this._status = params.status = new Draft(this);
    this._maxStudentCount = params.maxStudentCount = DEFAULT_MAX_STUDENT_COUNT;
    this._students = [];
    this._reviews = [];
  }

  get onlineStudyInfo(): {
    id: number;
    name: string;
    maxStudentCount: number;
    currentStudentsCount: number;
  } {
    return {
      id: this._id,
      name: this._name,
      maxStudentCount: this._maxStudentCount,
      currentStudentsCount: this._students.length,
    };
  }

  set status(status: OnlineStudyStatus) {
    this._status = status;
  }

  // 학생이 스스로 수강신청하면, 이에 대응하는 기능
  registerStudent(student: Student, callback: () => void): void {
    if (this._status.isRegistrable(student)) {
      this._students.push(student);
      callback();
    }
  }

  // 학생이 스스로 수강철회(?)하면, 이에 대응하는 기능
  unregisterStudent(student: Student) {
    const index = this._students.findIndex((s) => s.studentInfo.id === student.studentInfo.id);

    this._students = [...this._students.slice(0, index), ...this._students.slice(index + 1)];
  }

  writeReview(review: string) {
    if (this._status.isReviewable()) {
      this._reviews.push(review);
    }
  }

  // 학생이 자기가 등록한 수업 중에서 존재하는지를 찾을 수도 있었으나,
  // '이 수업에 이미 등록한 학생인지'는 수업 입장에서 판단하는 것이 좋다고 생각함
  isSignedUpStudent(student: Student): boolean {
    return this._students.find((s) => s.studentInfo.id === student.studentInfo.id) !== undefined;
  }
}
