import { db } from "../firebase/credentials";
import { collection, addDoc} from "firebase/firestore";

export default async function createForm(data) {
    try{
        const collectionRef = collection(db, "form");
        const formId = await addDoc(collectionRef, data);
        return formId; 
    }catch (error) {
        console.log(error);
    }
    
}

