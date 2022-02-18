import { Student } from '../Student';

export interface OnlineStudyStatus {
  isRegistrable(student: Student): boolean;
  isReviewable(): boolean;
}

/**
 *                 isRegistrable         isReviewable
 *
 *  Draft               T                     F
 *  Public              T                     T
 *  Private             F                     T
 *
 * */

// Draft에서 시작해서 수업을 처음 열면 Open
// Open에서 수강생이 가득 차면 Private, 수강생이 빠지면 다시 Open
