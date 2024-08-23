import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Authentication using email and password
export async function authUsingEmailAndPassword(auth, email, password, name) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const updatedUser = await updateProfile(auth.currentUser, 
        {
        displayName: name, 
        photoURL: null
      })
    return updatedUser;
  } catch (error) {
    throw new Error("Bad request");
  }
}









// creating new user
// export async function createUser(email, password, displayName, photoURL) {
//   try {
//     const newUser = await getAuth().createUser({
//       email: email,
//       emailVerified: false,
//       phoneNumber: null,
//       password: password,
//       displayName: displayName,
//       photoURL: photoURL,
//       disabled: false,
//     });
//     console.log(newUser);
//   } catch (error) {
//     console.log(error)
//   }
// }
