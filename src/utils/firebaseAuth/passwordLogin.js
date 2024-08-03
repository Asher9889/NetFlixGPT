import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginWithEmailAndPassword(auth, email, password) {
  const LoggedInUser = await signInWithEmailAndPassword
  (
    auth, 
    email, 
    password
);
  return LoggedInUser;
}
