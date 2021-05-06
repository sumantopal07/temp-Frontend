import User from './User.model';
export default interface Opp {
  oppId: number;
  user: User;
  location: string;
  skill: string;
  client: string;
  description: string;
  date: string;
  min_exp: number;
  demand: number;
}
