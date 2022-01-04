import Image from "next/image";
import { galleryLinks } from "../../../Data";
import Carousel from "react-bootstrap/Carousel";


function Mycarousel ({myLoader}) {
  return (
    <section className="page-section h-50" id="portfolio">
      <Carousel fade variant="light">
      {galleryLinks.map((haircut) => {
          return (
           <Carousel.Item key={haircut.id}>
           <Image
             layout="responsive"
             loader={myLoader}
             width={100}
             height={70}
             className="d-block w-100 img-fluid"
             src={`/img/portfolio/thumbnails/t_${haircut.id}.jpg`}
             alt="..."
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
