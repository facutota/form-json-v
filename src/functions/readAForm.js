import { db } from '../firebase/credentials';
import { collection, getDocs } from 'firebase/firestore';

export default async function readAForm( ) {
    try{
        const collectionRef = collection(db, 'forms');
        const docsBase = await getDocs(collectionRef);
        const doc = docsBase.docs.map(d => d.data());
        return doc;
    }catch(error){
        console.log(error);
    }
}