
import Card from 'react-bootstrap/card'
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import LocactionCard from './LocationCard'



function ContactCard() {
    return (
        <section className="page-section py-0 w-100" id="contact">
          <div className="container-fluid">
        <div className="row bg-white justify-content-center">
            <div className="col-lg-8 mb-4">
                <div
                id='map-container-section'
                className='z-depth-1-half map-container-section mb-4'
                >
                <LocactionCard  zoomLevel={17} />
                </div> 
        <div className="row text-center">
        <div className="col-md-4">
            
          <a className="btn-floating blue fs-2 accent-1" href="#">
            <FaMapMarkerAlt fill='red' />
          </a>
          <p className='fs-4'>Rambla de Badal, 28, 08014 Barcelona,Spain</p>
        </div>

        <div className="col-md-4">
          <a className="btn-floating blue fs-2 accent-1" href="#"><FaWhatsapp fill='green' /></a>
          <p className='fs-4' type="tel">+34 722 51 81 14</p>
          <p className='fs-4'>Mon - Sat, 9:00-20:00</p>
        </div>

        <div className="col-md-4">
          <a className="btn-floating blue accent-1 fs-2" href="#/"><FaInstagram fill='purple' /></a>
          <p className='fs-4'>info@gmail.com</p>
          <p className='fs-4'>sale@gmail.com</p>
        </div>
      </div>
      </div>
      </div>
        </div>
          
        </section>
    )
}
export default ContactCard;