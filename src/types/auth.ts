export interface User {
  id?: number;
  username?: string;
}

export interface LoginValues extends User {
  password?: string;
}
