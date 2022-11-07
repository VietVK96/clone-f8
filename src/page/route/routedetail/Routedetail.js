import { useParams } from "react-router-dom";
import { dataRoute } from "../../../data/dataRoute";
import styled from "styled-components";
import { Col, Row, Button } from "antd";

const Wrapper = styled.div`
  padding: 44px;
`;
const Title = styled.h2`
  color: #242424;
  font-size: 28px;
  font-weight: 900;
`;
const SubTitle = styled.h2`
  color: #242424;
  font-size: 24px;
  font-weight: 900;
`;
const Paragraph = styled.p`
  padding: 0;
  color: #292929;
  font-size: 18px;
  line-height: 2;
  /* margin: 18px 0px; */
`;
const SubParagraph = styled.p`
  padding: 0;
  color: #292929;
  font-size: 14px;
  line-height: 1.4;
  /* margin: 18px 0px; */
`;
const ButtonCustom = styled(Button)`
  background-color: #f05123;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  padding: 9px 16px;
  width: 121px;
  height: auto;
`;

const IMG = styled.img`
  border-radius: 16px;
  width: 228px;
`;
const Routedetail = () => {
  let param = useParams();
  const id = Number(param.id);

  const newdataRoute = dataRoute.find((index) => {
    return index.id === id;
  });

  //id: 2
  return (
    <Wrapper>
      <Title>{newdataRoute.type}</Title>
      <div>
        <Row>
          <Col span={16}>
            <Paragraph>{newdataRoute.p1}</Paragraph>
            <Paragraph>{newdataRoute.p2}</Paragraph>
            <Paragraph>{newdataRoute.p3}</Paragraph>
            <Paragraph style={{ color: "#757575" }}>
              Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện
              trong thời gian sớm nhất.
            </Paragraph>
          </Col>
        </Row>
      </div>

      {newdataRoute.listType.map((item, index) => {
        return (
          <div key={index}>
            <Row>
              <Col span={16}>
                <SubTitle>
                  {index + 1}. {item.typename}
                </SubTitle>
                <Paragraph>{item.description}</Paragraph>
              </Col>
            </Row>
            {item.listCourse.map((course, index) => {
              return (
                <Row key={index}>
                  <Col span={16}>
                    <div style={{ padding: 24, border: "2px solid #e8e8e8" }}>
                      <Row>
                        <Col
                          style={{ display: "flex", alignItem: "center" }}
                          span={7}
                        >
                          <IMG id={index} src={course.img} />
                        </Col>

                        <Col span={17}>
                          <h2>{course.title}</h2>
                          <SubParagraph style={{ padding: 0 }}>
                            {course.subDesc}
                          </SubParagraph>
                          <ButtonCustom>{course.textCenter}</ButtonCustom>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Routedetail;
