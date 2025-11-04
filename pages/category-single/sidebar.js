import React from 'react'
import Link from 'next/link'

const Sidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12 course-sitebar">
            <div className="blog-sidebar">
                <div className="widget features-widget">
                    <div className="features-top">
                        <h4>$80.20 <del>$94.99</del></h4>
                        <span> 5 days left!</span>
                    </div>
                    <div className="cart-btn">
                        <Link onClick={ClickHandler} href="/cart" className="theme-btn-s3">Add to Cart</Link>
                    </div>
                    <ul>
                        <li>Duration: <span>20 Hours</span></li>
                        <li>Lessons: <span>24</span></li>
                        <li>Videos <span>10 Hours</span></li>
                        <li>Students: <span>Max 100</span></li>
                        <li>Language: <span>English</span></li>
                        <li>Skill Level <span>Advanced</span></li>
                    </ul>
                </div>
                {/* Latest Course widget removed per request */}
            </div>
        </div>
    )
}

export default Sidebar;