import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  text-align: center;
  border-radius: 10px;
  color: #1a1a1a;
  height: 72px;
  width: 72px;
  :hover {
    background-color: #e8ebed;
  }
`;

const MenuItem = ({ icon, name, href }) => {
  return (
    <Li>
      <Link to={href}>
        <div>{icon}</div>
        <h4>{name}</h4>
      </Link>
    </Li>
  );
};


export default MenuItem;
