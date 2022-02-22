
import { useEffect } from 'react';
const Booksy = () =>{
    useEffect(() => {
        const script = document.createElement('script');
        script.type= 'text/javascript'
        script.src="https://booksy.com/widget/code.js?id=17618&country=es&lang=es";
        script.async = true;
        document.getElementById('script').appendChild(script)
        
    }, [])
  return <div id='script'></div>
}

export default Booksy;