import Image from 'next/image'
import { motion } from "framer-motion"
function Portfolio ({myLoader, galleryLinks}) {
    
return (
    <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    { galleryLinks.map((style =>{
                        return (
                            <motion.div 
                            key={style.id} 
                            className="col-lg-4 col-sm-6"
                            whileHover={{
                                position: 'relative',
                                zIndex:1,
                                background:'white',
                                scale:1.1,
                                transition: {
                                    duration: .2
                                }

                            }}>
                        <a className="portfolio-box" href={style.imgUrl} title="Project Name">
                            <Image
                            loader={myLoader}
                            layout="responsive" 
                            width={70} 
                            height={70} 
                            className="img-fluid" 
                            src={`/img/portfolio/thumbnails/t_${style.id}.jpg`} 
                            alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">{style.title}</div>
                                <div className="project-name">{style.haircutName}</div>
                            </div>
                        </a>
                    </motion.div>
                        )

                        
                        
                    
                    }
                    ))}
                </div>
            </div>
        </div>
)
}

export default Portfolio;