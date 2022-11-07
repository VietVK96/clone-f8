import { Layout } from "antd";
import {
  RiseOutlined,
  HomeOutlined,
  PlusCircleFilled,
  BulbOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const { Sider } = Layout;

// const { SubMenu } = Menu;

const Container = styled(Sider)`
  background-color: #ffff;
  font-size: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainSlider = () => {
  return (
    <Container width={100} collapsedWidth={80}>
      <Menu>
        <li style={{width:72, height:72, textAlign: 'center'}}>
          <PlusCircleFilled style={{ color: "#1473e6", fontSize:'30px' }} />
        </li>
        <MenuItem name={"Home"} icon={<HomeOutlined />} href={"/"} />
        <MenuItem name={"Route"} icon={<RiseOutlined />} href={"/route"} />
        <MenuItem name={"Học"} icon={<BulbOutlined />} href={"/study"} />
        <MenuItem name={"Blog"} icon={<GiftOutlined />} href={"/blog"} />
      </Menu>
    </Container>
  );
};
export default MainSlider;
