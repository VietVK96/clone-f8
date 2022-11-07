import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Progress, Avatar, row } from "antd";
import { useNavigate } from "react-router-dom";

const ContentBox = styled.div`
  border: 2px solid #e8e8e8;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 500px;
`;
const Title = styled(Link)`
  color: #242424;
  display: block;
  font-size: 20px;
  font-weight: 900;
  padding-bottom: 14px;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Img = styled.img`
  border-radius: 50%;
  height: 98px;
  object-fit: cover;
  width: 98px;
  border: 5px solid #f05123;
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  width: 302px;
`;

const IconList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  margin: auto 0 28px;
  padding: 24px 0;
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

const Icon = styled.img`
  /* border-radius: 50%; */
  height: 22px;
  object-fit: cover;
  width: 22px;
  background-color: #eee;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const CourseRoute = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/study/detail/${id}`);

    // code logic dđeer ddieeuf huongw trang
  };

  return (
    <ContentBox>
      <FlexBox>
        <div>
          <Title to={`/route/detail/${data.id}`}>{data.type}</Title>
          <Text>{data.subDesc}</Text>
        </div>
        <div>
          <Img src={data.img} />
        </div>
      </FlexBox>
      <IconList>
        {data.listType.map((item) => {
          return item.listCourse.map((subitem) => {
            return (
              <div
                key={subitem.id}
                style={{ position: "relative", marginRight: 30 }}
              >
                <Progress type="circle" percent={subitem.progress} width={36} />
                <Icon
                  onClick={() => handleClick(subitem.id)}
                  src={subitem.icon}
                />
                
              </div>
            );
          });
        })}


        {/* <div style={{ position: "relative", marginRight: 30 }}>
          <Progress type="circle" percent={75} width={36} />
          <Icon src="https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png" />
        </div>
        <div style={{ position: "relative", marginRight: 30 }}>
          <Progress type="circle" percent={75} width={36} />
          <Icon src="https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png" />
        </div>
        <div style={{ position: "relative", marginRight: 30 }}>
          <Progress type="circle" percent={75} width={36} />
          <Icon src="https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png" />
        </div> */}
      </IconList>
      <ButtonCustom type="primary">
        <Link to={`/route/detail/${data.id}`}>Xem chi tiết</Link>
      </ButtonCustom>
    </ContentBox>
  );
};

export default CourseRoute;
