import * as S from "./style";

export default function LabStatistics() {
  const data = [
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "불량 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "연체",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
  ]

  return (
    <S.ItemUl>
      <S.Header>
        <span>상태</span>
        <span>사용일</span>
        <span>퇴실일</span>
        <span>대여자</span>
        <span>사유</span>
      </S.Header>
      {data.map((item, idx) => (
        <S.ItemLi key={idx}>
          <span>{item.상태}</span>
          <span>{item.사용일}</span>
          <span>{item.퇴실일}</span>
          <span>{item.대여자}</span>
          <span>{item.사유}</span>
        </S.ItemLi>
      ))}
    </S.ItemUl>
  );
}