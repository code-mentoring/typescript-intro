export interface User {
  /** UUID */
  id: string;
  firstName: "Bruce",
  lastName: "Wayne",
  age: 33,
  address: string
  /** Hashed password not plain text */
  password: string;
}
