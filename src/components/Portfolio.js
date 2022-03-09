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
      <div className="container">

      <Carousel fade variant="dark" >
      {galleryLinks.map((haircut) => {
        return (
          <Carousel.Item key={haircut.id} className="d-block"  >
           <Image
             loading="lazy"
             placeholder="blur" 
             blurDataURL={`/img/portfolio/t_${haircut.id}.jpg`}
             layout="responsive"
             loader={myLoader}
             width='100%'
             height='100%'
             className="img-fluid d-inline-block "
             src={`/img/portfolio/t_${haircut.id}.jpg`}
             alt="..."
             objectFit="contain"
             objectPosition="50% 50%"
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
