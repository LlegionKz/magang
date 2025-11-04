import React from "react";
import Link from 'next/link'
import CoursesList from "../../api/CoursesList";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CourseSectionList = (props) => {
    return (
        <div className={`wpo-popular-area section-padding ${props.pClass}`}>
            <div className="container">
                <div className="wpo-popular-wrap">
                    <div className="row">
                        {CoursesList.slice(0, 6).map((course, aitem) => (
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
                                                    <li><Link onClick={ClickHandler} href={'/course-single/[slug]'} as={`/course-single/${course.slug}`}>{course.authortitle}</Link></li>
                                                </ul>
                                                <ul>
                                                    <li><i className="fi flaticon-star"></i></li>
                                                    <li>({course.ratting})</li>
                                                </ul>
                                            </div>
                                            <h2><Link onClick={ClickHandler} href={'/course-single/[slug]'} as={`/course-single/${course.slug}`}>{course.title}</Link>
                                            </h2>

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
                    {/* pagination removed (previously linked to blog pages) */}
                </div>
            </div>
        </div>
    );
}

export default CourseSectionList;
