import { signOut } from "firebase/auth";


export default async function logout(auth){
   try {
    await signOut(auth);
   } catch (error) {
    console.log(error)
   }
}