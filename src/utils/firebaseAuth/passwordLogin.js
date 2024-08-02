import {signInWithEmailAndPassword } from "firebase/auth";

export async function loginWithEmailAndPassword (auth, email, password){
    try {
        const LoggedInUser = await signInWithEmailAndPassword(auth, email, password)
        return LoggedInUser
    } catch (error) {
        console.log(error);
    }
}