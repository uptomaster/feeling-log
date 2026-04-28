import { useParams } from "react-router-dom"; // 파라미터 가져오는 커스텀 훅



const Diary = () => {
  const params = useParams();

  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;