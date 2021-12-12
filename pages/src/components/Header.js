/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState,  useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'


const navItems = [
    {id: 1,title:"Home", ref:"/#main", to: "/main"},
    {id: 2,title:"Services", ref:"/#services", to: "/services"},
    {id: 3,title:"Gallery", ref:"/#gallery", to: "/gallery"},
    {id: 4,title:"Contact", ref:"/#contact", to: "/contact"},
]
function Header() {
    const [isOpen, setIsopen] = useState(false);
    const [navActive, setNavactive] = useState(false);

    
     useEffect(() => {       
        window.addEventListener("scroll",changeNavBackground);
        

         return () => {
         window.removeEventListener("scroll",changeNavBackground);

        }
     })
     const changeNavBackground = () => {
        console.log(window.scrollY);
        if(window.scrollY>= 50) {
            setNavactive(false)
        } else {
            setNavactive(true)
        }
    }

   
    return (
        <>
         <nav className={ !navActive ? "navbar navbar-expand-lg bg-white navbar-scroll fixed-top" :"navbar active navbar-expand-lg navbar-scroll fixed-top"} id="mainNav">
            <div className="container">
                <a className="navbar-brand px-2" href="#page-top">
                <Image 
                    src="/img/logo/logo.svg"
                    alt="" 
                    width={40}
                    height={40} 
                    
                />{' '}
                <small className="mb-3">The Barber Show - Dr Cut</small>
                </a>
                { isOpen ?
                <ImCross className="mx-md-4 mx-xs-0  navbar-toggler cross" height={30} width={30} onClick={ ()=> setIsopen(!isOpen)} /> :
                <button 
                onClick={()=> setIsopen(!isOpen)}
                className="navbar-toggler navbar-toggler-right btn-light px-xs-0 px-md-4 px-lg-5" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <GiHamburgerMenu className="navbar-toggler-icon mt-2"/>
                </button>  
                }
                
                <div className={isOpen ? "collapsed navbar-collapse show" : "collapse navbar-collapse d-none" } id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto my-2 my-lg-0">
                    { navItems.map((items)=> {
                        return (
                            <Link
                            key={items.id} 
                            className="nav-item"
                            href={items.ref}
                            to={items.to}
                            passRef>
                            <a className="nav-link">{items.title}</a>
                            </Link>
                        )})
                    }                   
                    </ul>
                </div>
            </div>
        </nav>
                
            <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome to Dr Cut The Barber Show!</div>
                    <div className="masthead-heading text-uppercase">
                        <p className="text-white font-weight-bold">Your Favorite Place For Your Haircut in Barcelona</p>                        
                    </div>
                    <div className="masthead-heading text-uppercase">
                        <p className="text-white mb-5">It's nice to meet you</p>
                    </div>
                    <a className="btn btn-primary btn-xl text-uppercase" href="#about">Find Out More</a>
            </div>
        </header>
       
        </>
      
    )
}

export default Header;
