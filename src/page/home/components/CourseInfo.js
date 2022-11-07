import { Row } from "antd";
import { RightOutlined } from "@ant-design/icons";

import React from "react";
import styled from "styled-components";
import CourseItem from "./CourseItem";
import { Link } from "react-router-dom";

const Courses = styled.div`
  padding-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #242424;
  font-size: 24px;
  font-weight: bold;
`;
const New = styled.span`
  background-color: #1473e6;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 3px 6px;
  position: relative;
  left: 10px;
  text-transform: uppercase;
  top: -6px;
  background-color: blue;
`;

const Price = styled.span`
  font-size: 14px;
  margin-right: 8px;
  text-decoration: line-through;
`;

const PricePromotion = styled.span`
  color: red;
  font-size: 16px;
  font-weight: 600;
`;

const ExtraInfo = styled.a`
  /* background-color: transparent; */
  color: #f05123;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 0 8px 8px;
  display: flex;
  justify-content: flex-start;
  :hover {
    text-decoration: underline;
  }
`;
function CourseInfo({ data }) {
  return (
    <>
      <Courses>
        <Wrapper>
          <Title>
            {data.type} <New>New</New>
          </Title>

          {data.textExtra && data.link && (
            <ExtraInfo href={data.link}>
              <span>{data.textExtra}</span>
              <span>
                <RightOutlined />
              </span>
            </ExtraInfo>


          )}
        </Wrapper>

        {data.listCourse && (
          <Row gutter={[{ md: 20 }, { md: 20 }]}>
            {data.listCourse.map((item) => (
              <CourseItem key={item.id} data={item} />
            ))}
          </Row>
        )}
        {data.listItem && (
          <Row gutter={[{ md: 20 }, { md: 20 }]}>
            {data.listItem.map((item) => (
              <CourseItem key={item.id} data={item} />
            ))}
          </Row>
        )}

        {data.isPayed && (
          <div>
            <Price>2.499.000đ</Price>
            <PricePromotion>699.000đ</PricePromotion>
          </div>
        )}
      </Courses>
    </>
  );
}

export default CourseInfo;
