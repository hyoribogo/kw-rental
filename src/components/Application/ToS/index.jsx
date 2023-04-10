import * as S from "./style";
import iconExclamation from "../../../assets/icon-exclamation-circle.svg";
import { useState } from "react";

export default function ToS() {
  // 유효성 검사
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <S.ToSWrap>
        <S.ToSText>안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
      </S.ToSWrap>
      <S.Label htmlFor="agree">
        <span>확인하였으며 동의합니다.</span>
        <S.Check type="checkbox" name="" id="agree" onChange={handleCheckboxChange} />
      </S.Label>
      <div style={{ clear: "both" }}></div>
      {!isChecked ?
        <S.Exclam><img src={iconExclamation} alt="" /><span>필수 사항입니다.</span></S.Exclam>
        : <S.Empty></S.Empty>
      }
      <div style={{ clear: "both" }}></div>
    </>
  )
}