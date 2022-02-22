import Image from "next/image";
import { galleryLinks } from "../../../Data";
import Carousel from "react-bootstrap/Carousel";


function Mycarousel ({myLoader}) {
  
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        
      <Carousel fade variant="light">
      {galleryLinks.map((haircut) => {
        return (
          <Carousel.Item key={haircut.id}>
           <Image
             layout="responsive"
             loader={myLoader}
             width={1000}
             height={500}
             className="d-block"
             src={`/img/portfolio/thumbnails/t_${haircut.id}.jpg`}
             alt="..."
             sizes="50vw"
             objectFit="cover"
             priority={true}
             
             />
           <Carousel.Caption>
             <h5>{haircut.title}</h5>
             <p>{haircut.haircutName}</p>
           </Carousel.Caption>
         </Carousel.Item>
          )
        })}
    </Carousel>
        </div>                                                                    
    </section>
  )
}

export default Mycarousel;
