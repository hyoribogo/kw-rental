import dayjs from "dayjs";
import { useEffect, useState } from "react";
import iconCalendar from "../../../assets/icon-calendar.svg";
import DatePicker from "..";
import * as S from "./style";
import { useDispatch } from "react-redux";
import {
  setDualLastDate,
  setDualFirstDate,
} from "../../../store/reducer/datePickerSlice";

export default function DualDatePicker({
  firstInitial,
  lastInitial,
  className,
}) {
  const [firstCalendar, setFirstCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(firstInitial || 0, "days"),
  });

  const [lastCalendar, setLastCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(lastInitial || 0, "days"),
  });
  const dispatch = useDispatch();

  const handleGetDatePicker = (e, bool) => {
    const position = e.target.getBoundingClientRect();
    const top = position.top + position.height,
      left = position.left;
    bool
      ? setFirstCalendar((prev) => ({
          ...prev,
          visible: true,
          top: top,
          left: left,
        }))
      : setLastCalendar((prev) => ({
          ...prev,
          visible: true,
          top: top,
          left: left,
        }));
  };

  const handleSetMon = (num) => {
    setFirstCalendar((prev) => ({
      ...prev,
      date: prev.date.add(num, "days"),
    }));
  };

  useEffect(() => {
    handleSetMon(0) // 초기 렌더링 시 요일에 따라 날짜 조정
  }, [])

  useEffect(() => {
    switch (firstCalendar.date.day()) {
      case 5:
        handleSetMon(3);
        break;
      case 6:
        handleSetMon(2);
        break;
      case 0:
        handleSetMon(1);
        break;
      default:
        break;
    }
  }, [firstCalendar.date]);

  useEffect(() => {
    if (
      className !== "user" &&
      lastCalendar.date.valueOf() < firstCalendar.date.valueOf()
    ) {
      setLastCalendar((prev) => ({
        ...prev,
        date: dayjs(firstCalendar.date.add(1, "days")),
      }));
    }
    dispatch(setDualFirstDate(dayjs(firstCalendar.date).format("YYYY-MM-DD")));
    if (className === "user") {
      let sendDate = dayjs(firstCalendar.date);

      if (sendDate.day() === 4) {
        // 목요일 선택 시 다음 주 월요일로 설정
        sendDate = sendDate.add(4, "days");
      } else {
        sendDate = sendDate.add(1, "days");
      }

      dispatch(setDualLastDate(sendDate.format("YYYY-MM-DD")));
    }
  }, [firstCalendar.date]);

  useEffect(() => {
    if (
      className !== "user" &&
      lastCalendar.date.valueOf() < firstCalendar.date.valueOf()
    ) {
      setFirstCalendar((prev) => ({
        ...prev,
        date: dayjs(lastCalendar.date.subtract(1, "days")),
      }));
    }
      dispatch(setDualLastDate(dayjs(lastCalendar.date).format("YYYY-MM-DD")));
  }, [lastCalendar.date]);

  return (
    <S.InpWrapper className={className}>
      <S.DateCont
        onClick={(e) => handleGetDatePicker(e, 1)}
        className={className}
      >
        <img src={iconCalendar} alt="" />
        <span>
          {dayjs(firstCalendar.date).format(
            className !== "user" ? "YY년 M월 D일(dd)" : "M월 D일(dd)"
          )}
        </span>
      </S.DateCont>
      {firstCalendar && (
        <DatePicker
          className={className}
          calendar={firstCalendar}
          setCalendar={setFirstCalendar}
        />
      )}
      <span>~</span>
      <S.DateCont
        onClick={(e) => handleGetDatePicker(e, 0)}
        className={className}
      >
        {className !== "user" && <img src={iconCalendar} alt="" />}
        <span>
          {className === "user"
            ? dayjs(firstCalendar.date).day() === 4
              ? dayjs(firstCalendar.date).add(4, "days").format("M월 D일(dd)")
              : dayjs(firstCalendar.date).add(1, "days").format("M월 D일(dd)")
            : dayjs(lastCalendar.date).format("YY년 M월 D일(dd)")}
        </span>
      </S.DateCont>
      {className !== "user" && lastCalendar && (
        <DatePicker calendar={lastCalendar} setCalendar={setLastCalendar} />
      )}
    </S.InpWrapper>
  );
}