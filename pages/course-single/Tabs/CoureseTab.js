import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Overview from './Overview';
import Ov1 from './Overviews/Overview_1';
import Ov2 from './Overviews/Overview_2';
import Ov3 from './Overviews/Overview_3';
import Ov4 from './Overviews/Overview_4';
import Ov5 from './Overviews/Overview_5';
import Ov6 from './Overviews/Overview_6';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Review from './Review';
import Rv1 from './Reviews/Review_1';
import Rv2 from './Reviews/Review_2';
import Rv3 from './Reviews/Review_3';
import Rv4 from './Reviews/Review_4';
import Rv5 from './Reviews/Review_5';
import Rv6 from './Reviews/Review_6';
import Curr1 from './Curricula/Curriculum_1';
import Curr2 from './Curricula/Curriculum_2';
import Curr3 from './Curricula/Curriculum_3';
import Curr4 from './Curricula/Curriculum_4';
import Curr5 from './Curricula/Curriculum_5';
import Curr6 from './Curricula/Curriculum_6';



const CoureseTab = ({ CoursesDetails }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <div className="wpo-course-details-tab">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >

              Curriculum
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >

              instructor
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >

              reviews
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="wpo-course-details-text">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {/* course-specific overview */}
                {CoursesDetails?.Id === '1' && <Ov1 />}
                {CoursesDetails?.Id === '2' && <Ov2 />}
                {CoursesDetails?.Id === '3' && <Ov3 />}
                {CoursesDetails?.Id === '4' && <Ov4 />}
                {CoursesDetails?.Id === '5' && <Ov5 />}
                {CoursesDetails?.Id === '6' && <Ov6 />}
                {!CoursesDetails?.Id && <Overview />}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {/* Render course-specific curriculum if available */}
                {CoursesDetails?.Id === '1' && <Curr1 />}
                {CoursesDetails?.Id === '2' && <Curr2 />}
                {CoursesDetails?.Id === '3' && <Curr3 />}
                {CoursesDetails?.Id === '4' && <Curr4 />}
                {CoursesDetails?.Id === '5' && <Curr5 />}
                {CoursesDetails?.Id === '6' && <Curr6 />}
                {!CoursesDetails?.Id && <Curriculum />}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Instructor CoursesDetails={CoursesDetails} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                {/* course-specific reviews */}
                {CoursesDetails?.Id === '1' && <Rv1 />}
                {CoursesDetails?.Id === '2' && <Rv2 />}
                {CoursesDetails?.Id === '3' && <Rv3 />}
                {CoursesDetails?.Id === '4' && <Rv4 />}
                {CoursesDetails?.Id === '5' && <Rv5 />}
                {CoursesDetails?.Id === '6' && <Rv6 />}
                {!CoursesDetails?.Id && <Review />}
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </div>
    </div>
  );
}

export default CoureseTab;