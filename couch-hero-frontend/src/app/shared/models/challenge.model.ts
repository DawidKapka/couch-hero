import {User} from "./user.model";

export interface Challenge {
  type: 'running' | 'workout' | 'gapfiller' | 'psychology' | 'rehabilitation';
  author: User;
  location: string;
  goal?: string;
  completed?: string;
  pointsGoal?: number;
  pointsCompleted?: number;
}
