import React from "react";
import { Col, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import WriterDetail from "./WriterDetail";
import UserAction from "./UserAction";

const Img = styled.img`
  position: relative;
  background-size: cover;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  z-index: 999;
  :hover {
    z-index: 0;
  }
`;
const ButtonCustom = styled.span`
  background-color: white;
  opacity: 0.8;
  display: block;
  position: absolute;
  border-radius: 20px;
  border: 1px solid transparent;
  padding: 5px 20px;
  font-size: 15px;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  /* visibility: hidden; */
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1000;
  padding: 5px;
  position: absolute;
  left: 10px;
  top: 10px;
`;
const Text = styled.h2`
  margin-top: 12px;
  color: #292929;
  font-size: 16px;
  line-height: 1.4;
`;

const NumUser = styled.div`
  color: #666;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function CourseItem({ data }) {
  return (
    <Col span={6}>
      <div style={{ position: "relative" }}>
        {data.icon && <Icon src={data.icon} />}

        <Img src={data.img} />
        {data.textCenter && <ButtonCustom>{data.textCenter}</ButtonCustom>}
      </div>
      <Link to={""}>
        <Text>{data.title}</Text>
      </Link>
      {data.userNum !== 0 && (
        <NumUser>
          <GroupsIcon /> <span style={{ paddingLeft: 10 }}>{data.userNum}</span>
        </NumUser>
      )}
      {data.writer && <WriterDetail writer={data.writer} />}
      {data.action && <UserAction action={data.action}></UserAction>}
    </Col>
  );
}

export default CourseItem;
