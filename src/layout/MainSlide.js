import { Layout } from "antd";
import { RiseOutlined, HomeOutlined } from "@ant-design/icons";
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
`;

const MainSlider = () => {

  return (
    <Container width={100} collapsedWidth={80}>
      <Menu>
        <MenuItem name={"Home"} icon={<HomeOutlined />} href={"/"} />
        <MenuItem name={"Route"} icon={<RiseOutlined />} href={"/route"} />
      </Menu>
    </Container>
  );
};
export default MainSlider;
