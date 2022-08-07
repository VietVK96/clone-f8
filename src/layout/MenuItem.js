import { Link } from "react-router-dom"
import styled from "styled-components"

const Li =  styled.li`
    text-align: center;
    border-radius:10px;

    :hover{
        background-color: #eeee;
    }
`

const MenuItem = ({icon,name,href}) =>{
    return(
        <Li>
            <Link to={href}>
                <div >
                    {icon}
                </div>
                <h4>{name}</h4>
            </Link>
        </Li>
    )
}
export default MenuItem