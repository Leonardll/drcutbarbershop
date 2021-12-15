/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState,  useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'


const navItems = [
    {id: 1,title:"Home", ref:"/", to: "/"},
    {id: 2,title:"Services", ref:"/#services", to: "/services"},
    {id: 3,title:"Gallery", ref:"/#portfolio", to: "/portfolio"},
    {id: 4,title:"Contact", ref:"/#contact", to: "/contact"},
]
function Header({myLoader}) {
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
         <nav className={ !navActive & !isOpen ? "navbar navbar-expand-lg navbar-scroll fixed-top" :"navbar bg-white active navbar-expand-lg navbar-scroll fixed-top"} id="mainNav">
            <div className="container-fluid" id="main">
            <Link href="/" passHref>
                <a className="navbar-brand px-2" href="#main">
                <Image 
                    src="/img/logo/logo.svg"
                    alt="" 
                    width={40}
                    height={40} 
                    loader={myLoader}
                    
                />{' '}
                <small className="mb-3" href="#main">The Barber Show - Dr Cut</small>
                </a>
                </Link>
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
                
                <div className={isOpen ? "collapsed navbar-collapse bg-white  show" : "collapse navbar-collapse d-none" } id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto my-2 my-lg-0">
                    { navItems.map((items)=> {
                        return (
                            <Link
                            key={items.id}
                            activeClass="active" 
                            className="nav-item"
                            href={items.ref}
                            to={items.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
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
