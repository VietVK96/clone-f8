import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Row, Collapse, Button } from "antd";
import {
  PlusOutlined,
  MinusOutlined,
  PlayCircleOutlined,
  ProfileOutlined,
  CheckOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { dataStudy } from "../../data/dataStudy";
const Wrapper = styled.div`
  padding: 44px;
`;
const CourseName = styled.h1`
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
const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
const Text = styled.span`
  margin: 0;
  padding-left: 20;
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px auto;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  font-size: 14px;
  line-height: 48px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 412px;
  height: 232px;
  border-radius: 10px;
`;
const { Panel } = Collapse;
function StudyDetail() {
  const param = useParams();
  const id = Number(param.id);

  const courseDetail = dataStudy.find((item) => {
    return item.id === id;
  });

  const countChap = courseDetail?.content?.length;

  const [lesson, setLesson] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sum = courseDetail?.content?.reduce((total, item) => {
      return total + item.list.length;
    }, 0);

    let count = 0;
    courseDetail?.content?.forEach((item) => {
      item?.list?.forEach((lesson) => {
        const timeArr = lesson.time.split(":");
        count += Number(timeArr[0]) * 60 + Number(timeArr[1]);
      });
    });

    // .reduce((total, item) => total + item.time, "");

    setLesson((prevState) => sum);
    setCount(count);
  }, []);

  return (
    <div>
      <Wrapper>
        <Row gutter={16}>
          <Col className="gutter-row" span={16}>
            <div style={{ padding: "20px 0" }}>
              <CourseName>{courseDetail.title}</CourseName>
              <Para>{courseDetail.des}</Para>
            </div>

            <div style={{ padding: "20px 0" }}>
              <Title>Bạn sẽ học được gì?</Title>
              <Row gutter={16}>
                {courseDetail?.useList?.map((item, index) => {
                  return (
                    <Col key={index} className="gutter-row" span={12}>
                      <CheckOutlined style={{ color: "#f05123" }} />
                      <Text>{item}</Text>
                    </Col>
                  );
                })}
              </Row>
            </div>
            <div style={{ padding: "20px 0" }}>
              <Title>Nội dung khóa học</Title>
              <FlexBox>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div style={{ paddingRight: 20 }}>
                    <b style={{ paddingRight: 2 }}>{countChap}</b>
                    <span>chương</span>
                  </div>
                  <div style={{ paddingRight: 20 }}>
                    <b style={{ paddingRight: 2 }}>{lesson}</b>
                    <span>bài học</span>
                  </div>
                  <div style={{ paddingRight: 20 }}>
                    <span>Thời lượng</span>
                    <b style={{ paddingRight: 2 }}>
                      {Math.floor(count / 3600)}giờ{" "}
                      {Math.floor((count % 3600) / 60)} phút
                    </b>
                  </div>
                </div>
                <div>Mở rộng tất cả</div>
              </FlexBox>
              <div>
                <Collapse
                  bordered={false}
                  defaultActiveKey={["1"]}
                  expandIcon={({ isActive }) =>
                    !isActive ? (
                      <PlusOutlined style={{ color: "#f05123" }} />
                    ) : (
                      <MinusOutlined style={{ color: "#f05123" }} />
                    )
                  }
                  className="site-collapse-custom-collapse"
                >
                  {courseDetail?.content?.map((item, index) => {
                    return (
                      <Panel
                        id={index}
                        header={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div style={{ fontWeight: "bold" }}>
                              <span>{index + 1}</span> <span>{item.chap}</span>
                            </div>
                            <div>
                              <span style={{ paddingRight: 5 }}>
                                {item.list.length}
                              </span>
                              <span>Bài học</span>
                            </div>
                          </div>
                        }
                        key={index + 1}
                      >
                        {item.list.map((i, subid) => {
                          return (
                            <ItemDetail key={subid}>
                              <p>
                                {i.type === "video" ? (
                                  <PlayCircleOutlined
                                    style={{ padding: "16px 30px " }}
                                  />
                                ) : (
                                  <ProfileOutlined
                                    style={{ padding: "16px 30px " }}
                                  />
                                )}
                                <span>{subid + 1}.</span>
                                {i.listDetail}
                              </p>
                              <div>{i.time}</div>
                            </ItemDetail>
                          );
                        })}
                      </Panel>
                    );
                  })}
                </Collapse>
              </div>
            </div>
            <div style={{ padding: "20px 0" }}>
              <Title>Yêu cầu</Title>

              {courseDetail?.require?.map((item, index) => {
                return (
                  <div key={index}>
                    <CheckOutlined style={{ color: "#f05123" }} />
                    <Text>{item}</Text>
                  </div>
                );
              })}
            </div>
          </Col>

          <Col className="gutter-row" span={8}>
            <FlexCol>

              <Img
                src={courseDetail?.img}
                alt="img"
              />
              <div>
                <h2>Miễn Phí</h2>
                <Button type="primary">Đăng kí học</Button>
              </div>
              <div>
                <div>
                  <ClockCircleOutlined /> <Text>Trình độ cơ bản</Text>
                </div>
                <div>
                  <ClockCircleOutlined />{" "}
                  <Text>
                    Tổng số <b style={{ paddingRight: 2 }}>{lesson}</b> bài học
                  </Text>
                </div>
                <div>
                  <ClockCircleOutlined />{" "}
                  <Text>
                    Thời lượng{" "}
                    <b style={{ paddingRight: 2 }}>
                      {Math.floor(count / 3600)}giờ{" "}
                      {Math.floor((count % 3600) / 60)} phút
                    </b>
                  </Text>
                </div>
                <div>
                  <ClockCircleOutlined /> <Text>Học mọi lúc, mọi nơi</Text>
                </div>
              </div>
            </FlexCol>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
}

export default StudyDetail;
