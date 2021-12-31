import Carousel from "react-bootstrap/Carousel";
import Image from 'next/image';
import { galleryLinks } from "../../../Data";


function Mycarousel ({myLoader}) {
    return (
        <div className="page-section">
        <Carousel variant="light">
        {galleryLinks.map((haircut) => {
            return (
             <Carousel.Item key={haircut.id}>
             <Image
               layout="responsive"
               loader={myLoader}
               width={500}
               height={500}
               className="d-block w-100"
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
      </div>
    )
}

export default Mycarousel;