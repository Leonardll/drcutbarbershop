/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState,  useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { motion } from 'framer-motion'


const navItems = [
    {id: 1,title:"Home", ref:"/", to: "/"},
    {id: 2,title:"Services", ref:"/#services", to: "/services"},
    {id: 3,title:"Gallery", ref:"/#portfolio", to: "/portfolio"},
    {id: 4,title:"Team", ref:"/#team", to: "/team"},
    {id: 5,title:"Contact", ref:"/#contact", to: "/contact"},
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
        if(window.scrollY<= 30) {
            setNavactive(false)
        } else {
            setNavactive(true)
        }
    }

   
    return (
        <div className='container'>
         <nav className={ !navActive & !isOpen ? "navbar navbar-expand-lg bg-dark navbar-scroll fixed-top" :"navbar bg-dark active navbar-expand-lg navbar-scroll fixed-top"} id="mainNav">
            <div className="container-fluid" id="main">
            <Link href="/" passHref>
                <a className="navbar-brand px-2" href="#main">
                <Image 
                    src="/img/logo/logo.svg"
                    alt="" 
                    width={100}
                    height={80} 
                    loader={myLoader}
                    fill="black"
                    priority={true}
                    //layout='responsive'
                    
                />{' '}
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
                
                <div className={isOpen ? "collapsed navbar-collapse bg-dark  show" : "collapse navbar-collapse d-none" } id="navbarResponsive">
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
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-8 align-self-end">
         
                    </div>
                    <div className="col-lg-8 align-self-end">
                    <div className="masthead-heading text-uppercase">
                        <p className="text-white">¡Que comience el espectáculo!</p>
                    </div>
                    </div>
            </div>
            <a className="btn btn-primary btn-xl text-uppercase d-none" href="#about">Find Out More</a>
            </div>
        </header>
       
        </div>
      
    )
}

export default Header;
