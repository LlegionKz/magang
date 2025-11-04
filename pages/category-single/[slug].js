import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import CoursesCategory from '../../api/CoursesCategory'
import Courses from '../../api/Courses'
import Footer from '../../components/footer/Footer';
import Image from 'next/image';

const CourseSinglePage = (props) => {

    const router = useRouter()

    const CoursesCategoryDetails = CoursesCategory.find(item => item.slug === router.query.slug)

    // courses that belong to this category (match by slug)
    const filteredCourses = Courses.filter(item => item.category === CoursesCategoryDetails?.slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={CoursesCategoryDetails?.title} pagesub={'Course'} />

            {/* Course list area: no title/banner here. Show a centered prominent message when empty. */}
            <div className={`wpo-popular-area section-padding`}>
                <div className="container">
                    {filteredCourses && filteredCourses.length === 0 ? (
                        <div className="category-empty-state">
                            <h2>No courses found in this category.</h2>
                        </div>
                    ) : (
                        <div className="wpo-popular-wrap">
                            <div className="row">
                                {filteredCourses && filteredCourses.map((course, aitem) => (
                                    <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                                        <div className="wpo-popular-single">
                                            <div className="wpo-popular-item">
                                                <div className="wpo-popular-img">
                                                    <Image src={course.cImg} alt="" />
                                                    <div className="thumb">
                                                        <span>${course.fee}</span>
                                                    </div>
                                                </div>
                                                <div className="wpo-popular-content">
                                                    <div className="wpo-popular-text-top">
                                                        <ul>
                                                            <li><Image src={course.author} alt="" /></li>
                                                            <li><a href={`/course-single/${course.slug}`}>{course.authortitle}</a></li>
                                                        </ul>
                                                        <ul>
                                                            <li><i className="fi flaticon-star"></i></li>
                                                            <li>({course.ratting})</li>
                                                        </ul>
                                                    </div>
                                                    <h2><a href={`/course-single/${course.slug}`}>{course.title}</a></h2>

                                                    <div className="wpo-popular-text-bottom">
                                                        <ul>
                                                            <li><i className="fi flaticon-reading-book"></i> {course.student} Students</li>
                                                            <li><i className="fi flaticon-agenda"></i> {course.lesson} Lesson</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

                {/* The detailed course single area (image, tabs, sidebar) has been removed
                    per design: category pages now show banner + course list only. */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CourseSinglePage;