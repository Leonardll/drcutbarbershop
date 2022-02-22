
import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 
import {db} from '../../../base'
export const  useFireStore = (mycollection) => {
   
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
    // useEffect(() => {
    
    // const  unsub = async () => {

    // const document =[];
    // const querySnapshot =  await getDocs(collection(db,mycollection))
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         document.push({...doc.data() ,id: doc.id});
    //         //console.log(doc.id, " => ", doc.data());
    //       });
    //       setdocs(document);
    // } 

    
    //   return unsub;
       
      
    // }, [mycollection])
    

