import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Courses from "../../api/Courses";
import Footer from '../../components/footer/Footer';
import CoureseTab from './Tabs/CoureseTab';
import Sidebar from './sidebar';
import Image from 'next/image';

const CourseSinglePage = (props) => {

    const router = useRouter()

    const CoursesDetails = Courses.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={CoursesDetails?.title} pagesub={'Course'} />
            <div className="wpo-course-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-course-details-wrap">
                                <div className="wpo-course-details-img">
                                    <Image src={CoursesDetails?.cSImg} alt="" />
                                </div>
                                <CoureseTab CoursesDetails={CoursesDetails} />
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CourseSinglePage;