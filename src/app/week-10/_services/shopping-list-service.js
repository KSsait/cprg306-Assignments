import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export const getItems = async (userId) => { 
    try {
        const itemsCollectionRef = collection(doc(db, 'users', userId, 'items'));
        const itemsSnapshot = await getDocs(itemsCollectionRef);
        const items = [];

        itemsSnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return items;
    } catch(error) {
        console.error("Error getting items: ", error);
        throw error;
        return [];
    }
    }

export const addItem = async (userId, item) => {
    try {
        const itemsCollectionRef = collection(db, 'users', userId, 'items');
        const itemRef = await addDoc(itemsCollectionRef, item);
        return itemRef.id;
    } catch(error) {
        console.error("Error adding item: ", error);
        throw error;
    }
};