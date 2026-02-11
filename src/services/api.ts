import { User } from '../types/userTypes';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsersAPI = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data: User[] = await response.json();

    return data;
  } catch (error) {
    console.log('API Error', error);
    throw error;
  }
};
