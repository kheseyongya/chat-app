import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

export const ChatPage = (props) => {
  const charProps = useMultiChatLogic(
    "044bbd66-3e69-4b7e-bb36-94e3e5165d4c",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...charProps} />
      <MultiChatWindow {...charProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatPage;
