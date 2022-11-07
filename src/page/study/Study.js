import React from "react";
import styled from "styled-components";
import { dataArr } from "../../data/dataCourse";
import CourseInfo from "../home/components/CourseInfo";
import { Col, Row } from "antd";
const Wrapper = styled.div`
  padding: 27px 44px;
`;
const StudyIntro = styled.h1`
  color: #242424;
  font-size: 28px;
  font-weight: 900;
`;
const Para = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  width: 840px;
`;

const Study = () => {
  return (
    <Wrapper>
      <div style={{ marginBottom: 30 }}>
        <StudyIntro>Khóa học</StudyIntro>
        <Para>
          Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học
          miễn phí, chất lượng, nội dung dễ hiểu.
        </Para>
      </div>
      <div>
        {dataArr.map((course) => (
          <CourseInfo key={course.id} data={course} />
        ))}
      </div>
      <div>
        <Row>
          <Col span={24}>col</Col>
        </Row>
      </div>
    </Wrapper>
  );
};
export default Study;
