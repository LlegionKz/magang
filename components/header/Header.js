import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '/public/images/logo.svg'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar'
import Image from 'next/image'


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            <HeaderTopbar topbarClass={props.topbarClass}/>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Home Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Home Style 4</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-5">Home Style 5</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Courses</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/course">Courses Style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/course-2">Courses Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/course-3">Courses Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/course-single/Learn-WordPress-&-Elementor-for-Beginners">Courses single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/lesson">Lesson</Link></li>
                                                <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li><Link onClick={ClickHandler} href="/teacher">Teachers</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Courtney-Henry">Teacher Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/become-teacher">Become Teacher</Link></li>
                                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Become-a-great-WordPress-&-PHP-developer.">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Become-a-great-WordPress-&-PHP-developer.">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Become-a-great-WordPress-&-PHP-developer.">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Principles-and-Policies">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="login" href="/login"><span className="text">Sign In</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-charity"></i>
                                            </span></Link>
                                        <Link onClick={ClickHandler} className="theme-btn" href="/register"><span className="text">Sign Up</span>
                                            <span className="mobile">
                                                <i className="fi flaticon-charity"></i>
                                            </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;