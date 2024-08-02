import {createUserWithEmailAndPassword } from "firebase/auth";

export async function authUsingEmailAndPassword(auth, email, password){
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        return  user;
    } catch (error) {
        console.log(error);
    }
}