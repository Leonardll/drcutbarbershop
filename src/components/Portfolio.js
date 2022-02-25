import Image from "next/image";
import { galleryLinks } from "../../Data";
import Carousel from "react-bootstrap/Carousel";


function Mycarousel ({myLoader}) {
  
  return (
    <section className="page-section" id="portfolio">
      <div className="container-fluid">
      <div className="text-center mb-5">
       <h2 className="section-heading text-uppercase">Gallery</h2>
      </div>
      <div className="container-fluid">

      <Carousel fade variant="dark">
      {galleryLinks.map((haircut) => {
        return (
          <Carousel.Item key={haircut.id}>
           <Image
             loading="lazy"
             placeholder="blur" 
             blurDataURL={`/img/portfolio/t_${haircut.id}.jpg`}
             layout="responsive"
             loader={myLoader}
             width={1000}
             height={500}
             className=""
             src={`/img/portfolio/t_${haircut.id}.jpg`}
             alt="..."
             objectFit="cover"
             sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
             srcSet="large.jpg 1024w, medium.jpg 640w,small.jpg 320w"
             />
        
         </Carousel.Item>
          )
        })}
    </Carousel>
        </div>
        </div>                                                                    
    </section>
  )
}

export default Mycarousel;
