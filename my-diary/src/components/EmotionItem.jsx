import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

// 1. props에 onClick을 추가로 받습니다.
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick} // 2. 클릭했을 때 부모가 준 함수가 실행되도록 연결!
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} alt="" />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;