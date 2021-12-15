import GoogleMapReact from 'google-map-react'
//import { Icon } from '@iconify/react'
import { GoLocation} from 'react-icons/go'
const API_KEY = process.env.API_KEY

const location = {
  address: 'Rambla de Badal, 28, 08014 Barcelona',
  lat:41.36844549873289,
  lng:2.1347050362887883,
} 
const LocationPin = ({ text }) => (
    <div className="pin d-flex flex-row">
       <GoLocation height={30} width={30} fill="black" className="pin-icon d-block" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
const LocationCard = ({ zoomLevel }) => (
    <div className="map">
      <h3>Come Visit Us at the shop</h3>
  
      <div className="google-map" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
export default LocationCard;