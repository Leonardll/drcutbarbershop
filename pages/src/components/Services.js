import { FaCircle, FaShoppingCart, FaLaptop, FaLock } from 'react-icons/fa'
//import  { serviceLinks } from '../../../Data'

//const data = serviceLinks;
//console.log(data);
const serviceLinks = [
    
    {
        title:'Haircut',
        text:'All dependencies are kept current to keep things fresh.'
       
    },
    {
        title:'Barberos',
        text:'You can use this design as is, or you can make changes!'
        
    },
    {
        title:'Color',
        text:'Is it really open source if its not made with love?'
        
    }, 
]

const icons = [
    FaShoppingCart, FaLaptop, FaLock
    
]
function Services () {
    
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center">
                    { serviceLinks.map((service,idx) => {
                        const Icon = icons[idx];
                        console.log(Icon)
                        return (
                            <div className="col-md-4" key={idx}>                        
                            <span className="fa-stack fa-4x">
                                <FaCircle className="svg-inline--fa fa-circle w-16 fa-stack-2x text-dark" height={100} width={100} />
                                <Icon className="svg-inline--fa fa-shopping-cart fa-w-18 fa-stack-1x fa-inverse" fill="white" />
                            
                            </span>
                            <h4 className="my-3">{service.title}</h4>
                            <p className="text-muted">{service.text}</p>
                        </div>
                        )
                    })
                  
                    }
                </div> 
            </div>
        </section>
    )
}
export default Services;