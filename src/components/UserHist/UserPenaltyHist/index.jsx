import EmptyData from '../../EmptyData'
import { getMyPenalty } from "../../../api/api"
import { useEffect } from "react"
import * as S from "../style"
import { useState } from 'react'
import { rentalStatus } from '../../../data/rentalStatus'

export default function UserPenaltyHist() {
  const [penaltyList, setPenaltyList] = useState([])

  const handleGetMyPenalty = async () => {
    const res = await getMyPenalty()
    setPenaltyList(res.penalties)
  }

  useEffect(() => {
    handleGetMyPenalty()
  }, [])
  return (
    penaltyList.length ?
      <S.HistWrap>
        <S.Header className="penalty">
          <span>수령일</span>
          <span>반납일</span>
          <span>상태</span>
          <span>기자재/랩실</span>
          <span>사유</span>
        </S.Header>

        {penaltyList.map((penalty) => (
          <S.HistList className="penalty" key={penalty.id}>
            <span>{penalty.startDate}</span>
            <span>{penalty.endDate}</span>
            <span>{penalty.status}</span>
            <span>{penalty.assetName}</span>
            <span>{rentalStatus[penalty.reason]}</span>
          </S.HistList>
        ))}
      </S.HistWrap>
      : <EmptyData className="user-rental" content={["페널티 이력이 없습니다."]} />
  )
}