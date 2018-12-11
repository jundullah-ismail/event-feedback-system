import {FeedbackType} from './feedback-type.enum';

export interface Participant {
  name: string;
  email: string;
  age: number;
  gender: string;
  phoneNo: string;
  IC: string;
  feedbackType: FeedbackType;
}

