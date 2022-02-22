
import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 
import {db} from '../../base'
 const  useFireStore = (mycollection) => {
   
    const [docs, setdocs] = useState([])

    useEffect(() => {
        const unsub = onSnapshot(collection(db, mycollection), (querySnapshot) => {
          const documents = querySnapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id
            }
          });
          setdocs(documents);
        });
        return () => unsub();
      }, [mycollection])
      return { docs };

    }
  
    

export default useFireStore;