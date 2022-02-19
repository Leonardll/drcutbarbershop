
import Card from 'react-bootstrap/card'
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import LocactionCard from './LocationCard'



function ContactCard() {
    return (
        <section className="page-section py-0 w-100" id="contact">
        <div className="row bg-light justify-content-center">
            <div className="col-lg-8 mb-4">
                <Card>
                    <Card.Body className="bg-dark text-light">
                    <LocactionCard  zoomLevel={17} /> 
        <div className="row text-center">
        <div className="col-md-4">
          <a className="btn-floating blue accent-1" href="#"><FaMapMarkerAlt fill='red' /></a>
          <p>Rambla de Badal, 28, 08014 Barcelona,Spain</p>
        </div>

        <div className="col-md-4">
          <a className="btn-floating blue accent-1" href="#"><FaWhatsapp fill='green' /></a>
          <p type="tel">+34 722 51 81 14</p>
          <p>Mon - Sat, 9:00-20:00</p>
        </div>

        <div className="col-md-4">
          <a className="btn-floating blue accent-1" href="#/"><FaInstagram fill='purple' /></a>
          <p>info@gmail.com</p>
          <p>sale@gmail.com</p>
        </div>
      </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </section>
    )
}
export default ContactCard;