// src/util/get-stringed-date.js

export const getStringedDate = (targetDate) => {
  // 날짜 객체를 YYYY-MM-DD 형식의 문자열로 변환
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};