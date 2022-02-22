/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState,  useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'


const navItems = [
    {id: 1,title:"Home", ref:"/#main", to: "/main"},
    {id: 2,title:"Services", ref:"/#services", to: "/services"},
    {id: 3,title:"Gallery", ref:"/#portfolio", to: "/portfolio"},
    {id: 4,title:"Team", ref:"/#team", to: "/team"},
    {id: 5,title:"Contact", ref:"/#contact", to: "/contact"},
]
function Navbar ({myLoader}) {
    const [isOpen, setIsopen] = useState(false);
    const [navActive, setNavactive] = useState(false);

    return (
        <div className='container-fluid p-0'>
         <nav className= "navbar navbar-expand-lg navbar-dark bg-dark scroll  fixed-top" id="mainNav">
            <div className="container-fluid">
            <Link href="/#main" passHref>
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
                
                <button
                onClick={()=> setIsopen(!isOpen)}
                className="navbar-toggler navbar-toggler-right btn px-xs-0 px-md-4 px-lg-5"
                type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    { !isOpen ?
                <FaBars className="navbar-toggler-icon" /> :
                <ImCross className=" fs-2 cross" /> 
            }
                </button>

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
                            <a className="nav-link"
                            onClick={ () => setIsopen(false)}>{items.title}</a>
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

export default Navbar;
