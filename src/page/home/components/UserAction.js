import styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
  color: #757575;
  font-size: 14px;
`;
const View = styled.span`
  padding: 0 20px 0 5px;
`;

const Like = styled.span`
  padding: 0 20px 0 5px;
`;

const Comment = styled.span`
  padding: 0 20px 0 5px;
`;
function UserAction({ action }) {
  return (
    <ActionWrapper>
      <RemoveRedEyeIcon />
      <View>{action.viewer} </View>
      <ThumbUpIcon />
      <Like>{action.like}</Like>
      <ChatBubbleIcon />
      <Comment>{action.comment}</Comment>
    </ActionWrapper>
  );
}
export default UserAction;
