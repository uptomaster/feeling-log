import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);

  // 1. 현재 파라미터의 id와 일치하는 일기 데이터 찾아오기
  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  // 2. 만약 잘못된 접근으로 데이터가 없다면?
  if (!currentDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  // 3. 수정 완료 시 실행될 함수
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  // 4. 삭제 버튼 클릭 시 실행될 함수
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      {/* 5. 기존 데이터를 Editor에 넘겨주기 */}
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;