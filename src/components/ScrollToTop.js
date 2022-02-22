import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const  ScrollToTop =  ()  =>  {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(pageYOffset)
        if(window.pageYOffset > 300) {
            console.log(window.pageYOffset)
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };

    });
    return (
        <div className="fixed-bottom mx-1 bottom-2 end-2">
            { isVisible ?
            <button 
            type="button" 
            onClick={ () => scrollToTop} 
            className="opacity-75 btn btn-dark btn-floating btn-lg"
            > 
            <BiArrowFromBottom />
            </button>
            : null
            }
        </div>
    )
}

export default ScrollToTop;