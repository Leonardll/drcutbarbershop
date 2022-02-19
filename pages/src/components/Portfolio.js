import Image from "next/image";
import { galleryLinks } from "../../../Data";
import Carousel from "react-bootstrap/Carousel";


function Mycarousel ({myLoader}) {
  return (
    <section className="page-section" id="portfolio">
      <Carousel fade variant="light">
      {galleryLinks.map((haircut) => {
          return (
           <Carousel.Item key={haircut.id}>
           <Image
             layout="responsive"
             loader={myLoader}
             width={250}
             height={250}
             className="d-block img-fluid"
             src={`/img/portfolio/thumbnails/t_${haircut.id}.jpg`}
             alt="..."
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
    </section>
  )
}

export default Mycarousel;
