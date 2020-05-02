// import someFunction from 'something';

import { getPassword } from "./lib/getPassword";
export { getPassword } from "./lib/getPassword";
import { User } from "./lib/types";

// let unknownThing: bigint = someFunction();
// let unknownThing2 = someFunction() as number;


// What types are allowed????
let firstName: string; // LOWERCASE - NOT THE OBJECT
let age: number; // LOWERCASE - NOT THE OBJECT
let canadian: boolean; // LOWERCASE - NOT THE OBJECT
let birthday: Date; // Uppsercased - A DATE INSTANCE
let address: string | null = null;

address = "Toronto";


const user: User = {
  id: "456",
  firstName: "Bruce",
  lastName: "Wayne",
  age: 33,
  address: "Asdkjasdlaksjhdalksjdhlaskjdhaslkjdhalskjdhakldh",
  password: 'secret'
}

// What we want
getPassword("123")
getPassword(user);


export const arrowFunction = () => {
  console.log('hello');
}
