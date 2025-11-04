import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CourseSectionS3 from '../../components/CourseSectionS3/CourseSectionS3';
import Newslatter2 from '../../components/Newslatter2/Newslatter2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CoursesCategory from '../../api/CoursesCategory';

const CoursePage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Course'} pagesub={'Course'} />
            <div className="container">
                <div className="course-searchbar" style={{marginTop: 96, marginBottom: 12}}>
                    <div className="search-item search-input">
                        <span className="search-icon" aria-hidden>
                            {/* magnifier SVG */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L15.8 15.8" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="form-control course-search-input"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="search-item category-select">
                        <select className="form-control course-category-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                            <option value="">All categories</option>
                            {CoursesCategory.map((c, idx) => (
                                <option key={idx} value={c.slug}>{c.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="search-item clear-button">
                        <button className="btn course-clear-btn" onClick={() => { setSearchQuery(''); setCategoryFilter('') }}>Clear</button>
                    </div>
                </div>
            </div>
            <CourseSectionS3 searchQuery={searchQuery} categoryFilter={categoryFilter} />
            <Newslatter2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CoursePage;
