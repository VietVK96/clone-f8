import MainFooter from "../../layout/MainFooter";
import CarouselCustom from "./components/Carousel";
import CourseInfo from "./components/CourseInfo";
import styled from "styled-components";
import { dataArr, infoArr } from "../../data/dataCourse";

const Wrapper = styled.div`
  padding-left: 20px;
  min-height: 100vh;
`;

const Dashboard = () => {
  return (
    <div>
      <Wrapper>
        <CarouselCustom />
        <div style={{ padding: "0px 44px" }}>
          <div style={{ color: "#82919b", fontize: "14px"}}>
            225.624+ người khác đã học
          </div>
          {dataArr.map((course) => (
            <CourseInfo key={course.id} data={course} />
          ))}
          {infoArr.map((list_info) => (
            <CourseInfo key={list_info.id} data={list_info} />
          ))} 
        </div>
      </Wrapper>

      <MainFooter />
    </div>
  );
};
export default Dashboard;
