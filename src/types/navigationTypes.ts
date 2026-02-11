import { User } from './userTypes';

export type RootStackParamList = {
  Users: undefined;
  UserDetails: { user: User };
};
