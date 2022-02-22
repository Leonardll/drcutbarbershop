import Image from "next/image";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ContactCard from "../components/ContactCard";
import ScrollToTop from "../components/ScrollToTop";
import Booksy from "../components/Booksy";
import Carousel from "../components/Portfolio";
import Team from "../components/Team";
import {getRef, storage, getAllItems, getDownloadURL } from "../../base";
import  useFireStore from "../hooks/useFireStore";

//  const mypicks = getRef(storage,'barber/')
 

// console.log(mypicks);

// Find all the prefixes and items.
// getAllItems(mypicks)
//   .then( async (res) => {
     // res.prefixes.forEach((folderRef) => {  //   All the prefixes under listRef.
      //  You may call listAll() recursively on them.
    // });
//     const { items } = res;
//     const urls = await Promise.all(
//        items.map((item) => getDownloadURL(item)) 
//     );
//     console.log('url',urls)
    
//   }).catch((error) => {
//       console.log(error)
    // Uh-oh, an error occurred!
//   });



const myLoader = ({ src, width, quality }) => {
    return `https://drcutthebarbershow.web.app/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
const myLoader2 = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${
      quality || 75
    }`;
  };

export default function Home() {
    const { docs } = useFireStore('barbers') 
    
    // const mypicks = getRef(storage,'barber/')
    // console.log(db)

//console.log(mypicks);

// // Find all the prefixes and items.
// getAllItems(mypicks)
//   .then( async (res) => {
//     // res.prefixes.forEach((folderRef) => {
//     //   // All the prefixes under listRef.
//     //   // You may call listAll() recursively on them.
//     // });
//     const { items } = res;
//     const urls = await Promise.all(
//        items.map((item) => getDownloadURL(item)) 
//     );
//     console.log('url',urls)
    
//   }).catch((error) => {
//       console.log(error)
//     // Uh-oh, an error occurred!
//   });


  return (
    <div data-spy="scroll" data-target="#mainNav" data-offset="0">
      <main id="main" className="container-fluid">
          <Booksy className="position-absolute" /> 
          <Services />
          <Carousel  myLoader={myLoader} />
          <Team  docs={docs} myLoader2={myLoader2}  />
          <ContactCard  />
      </main>
{/* 
      <footer className="footer text-center">
        <a
          className="text-decoration-none text-dark"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              loader={myLoader}
              
            />
          </span>
        </a>
    </footer> */}
    <ScrollToTop /> 
    </div>
  );
}
