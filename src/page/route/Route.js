import React from "react";
import styled from "styled-components";
import CourseRoute from "./CourseRoute";
import { dataRoute } from "../../data/dataRoute";
import { Col, Divider, Row } from "antd";
const Wrapper = styled.div`
  margin-bottom: 60px;
  padding: 8px 44px 0;
`;
const RouteIntro = styled.h1`
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
const Route = () => {
  return (
    <Wrapper>
      <div style={{ marginBottom: 80 }}>
        <RouteIntro>Lộ trình học</RouteIntro>
        <Para>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
          Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập
          trung vào lộ trình “Front-end”.
        </Para>
      </div>
      <Row>
        {dataRoute.map((item, index) => {
          return (
            
            <Col key={index} span={10}>
              <CourseRoute data={item} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};
export default Route;
