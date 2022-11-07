import styled from "styled-components";

const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
`;
const Img = styled.img`
  border-radius: 50%;
  height: 20px;
  margin-right: 8px;
  object-fit: cover;
  width: 20px;
`;

const Name = styled.span`
  color: #292929;
  font-weight: 600;
  padding: 0 10px 0 5px;
`;

const Time = styled.span`
  color: #666;
  font-size: 14px;
  padding-left: 10px;
`;
function WriterDetail({ writer }) {
  return (
        <WriterWrapper>
          <Img src={writer.img} />
          <Name>{writer.name}</Name>
          <Time>{writer.time}</Time>
        </WriterWrapper>
  );
}
export default WriterDetail;
