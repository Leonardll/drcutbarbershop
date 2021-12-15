
import script from 'next/script';
//import Script from 'next/script'
import { useEffect } from 'react';
const Booksy = () =>{
    useEffect(() => {
        const script = document.createElement('script');
        script.src="https://booksy.com/widget/code.js?id=17618&country=es&lang=es";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [])
  return <div className="div"></div>
}

export default Booksy;