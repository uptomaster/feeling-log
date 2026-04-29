import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";
import Button from "../components/Button";
import { getEmotionImage } from "../util/get-emotion-image"; // 이미지 불러오기
import { getStringedDate } from "../util/get-stringed-date"; // 날짜 변환 유틸
import "./Diary.css";
const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  // 1. 현재 id와 일치하는 일기 데이터 찾기
  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  // 2. 데이터가 없을 경우 처리 (새로고침 등)
  if (!currentDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const { createdDate, emotionId, content } = currentDiaryItem;
  const title = `${getStringedDate(new Date(createdDate))} 기록`;

  return (
    <div>
      <Header
        title={title}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <article>
        <section className="img_section">
          <h4>오늘의 감정</h4>
          <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
            <img src={getEmotionImage(emotionId)} alt="" />
          </div>
        </section>
        <section className="content_section">
          <h4>오늘의 일기</h4>
          <div className="content_wrapper">
            <p>{content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;