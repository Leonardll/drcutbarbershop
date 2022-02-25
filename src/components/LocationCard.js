import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import { GoLocation} from 'react-icons/go'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY



const location = {
  address: 'Rambla de Badal, 28, 08014 Barcelona',
  lat:41.36689795675915,
  lng:2.13444100238081,
 

} 


const LocationPin = ({ text }) => (
    <div className="pin d-flex flex-row">
       <GoLocation height={50} width={50} fill="red" color='red' className="pin-icon " />
      {/* //<p className="pin-text">{text}</p> */}
    </div>
  )
function LocationCard () {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      //libraries: ['localContext', 'places', 'drawing']   
      
    });

    let map; 
    let marker;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: {lat: location.lat, lng: location.lng},
        zoom: 18,
      });
       marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map:map,
            animation: window.google.maps.Animation.DROP,
            title: `${location.address}`,
          });
      marker.addListener("click", toggleBounce,{passive: true})
    });
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    
  });

  return (
      <div className="container w-100 h-100">
        <h3 className='map-title fs-3'>Come Visit Us at the shop</h3>
    <div id="map" ref={googlemap} />
    </div>
  );

}

export default LocationCard;