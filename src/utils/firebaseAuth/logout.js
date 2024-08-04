import { signOut } from "firebase/auth";


async function logout(auth){
   try {
    await signOut(auth);
   } catch (error) {
    console.log(error)
   }
}

export default logout;