import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

export const ChatPage = (props) => {
  const charProps = useMultiChatLogic(
    "9102e89e-ad9f-4f1f-8e64-c0d1b90b91be",
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
