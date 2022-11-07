import { Layout, Input } from "antd";
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { BellOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";

const { Header } = Layout;

const CustomHeader = styled(Header)`
  padding: 0 20px;
  text-align: center;
  height: 65px;
  background-color: #ffff;
  border-bottom: 1px solid #cccc;

  & {
    line-height: 1.5;
  }
  @media print {
    display: none;
  }
`;
const InputHeader = styled(Input)`
  border: 2px solid #e8e8e8;
  border-radius: 20px;
  height: 40px;
  padding: 0 16px 0 8px;
  transition: border-color 0.2s ease-in-out;
  width: 420px;
`;
const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  border-radius: 8px;
  height: 38px;
  object-fit: contain;
  width: 38px;
`;
const Title = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  margin-left: 16px;
`;

const MyCourse = styled.div`
  background-color: transparent;
  color: #3333;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-right: 16px;
  padding: 8px px;
`;
const Avatar = styled.img`
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  margin-left: 12px;
  object-fit: cover;
  width: 28px;
`;

const MainHeader = () => {
  const handleClick = () => {
    localStorage.removeItem('userLogin');
    setIsLoggedIn(false)
  };
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              Trang ca nhan
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              Cai dat
            </a>
          ),
          key: "1",
        },
        {
          label: <a onClick={handleClick}>Dang xuat</a>,
          key: "2",
        },
      ]}
    />
  );

  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    userLogin ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [userLogin]);

  return (
    <CustomHeader>
      <HeaderContainer>
        <HeaderLeft>
          <Logo src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"></Logo>
          <Title>Học Lập Trình Để Đi Làm</Title>
        </HeaderLeft>
        <HeaderMiddle>
          <InputHeader
            size="large"
            placeholder="Tìm kiếm khóa học"
            prefix={<SearchOutlined />}
          />
        </HeaderMiddle>
        <HeaderRight>
          {isLoggedIn ? (
            <>
              <MyCourse>Khóa học của tôi</MyCourse>

              <Dropdown overlay={menu} trigger={["click"]}>
                <Avatar src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"></Avatar>
              </Dropdown>
              <BellOutlined />
            </>
          ) : (
            <Button>
              <Link to="/login">Log In</Link>
            </Button>
          )}
        </HeaderRight>
      </HeaderContainer>
    </CustomHeader>
  );
};
export default MainHeader;
