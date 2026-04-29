import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App"; // 저장 기능을 위해 필요

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext); // Context에서 작성 함수 가져오기

  // 저장 버튼을 눌렀을 때 실행될 함수
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); // 저장 후 홈으로 이동 (뒤로가기 방지용 replace)
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        // 🌟 nav(-1)로 수정하여 실제 뒤로 가기 기능을 구현합니다.
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      {/* Editor에 저장 함수를 props로 넘겨줍니다. */}
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;