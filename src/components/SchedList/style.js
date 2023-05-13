import styled from "styled-components";

export const SchedLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Renter = styled.div`
  padding: 18px 0;
  text-align: center;
  width: 112px;
  flex-grow: 1;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & p {
    font-size: 12px;
  }

  & p:first-child {
    font-weight: 600;
    font-size: 15px;
  }

  & p:nth-child(2) {
    margin: 7px 0 18px;
    color: ${(props) => props.theme.color.primary.main};
  }

  & Button {
    margin-top: 14px;
  }
`;

export const RentalUl = styled.ul`
  width: 728px;
  display: flex;
  flex-direction: column;
`;

export const TimeModal = styled.span`
  font-size: 14px;
  display: block;
  margin: 30px 0 16px;
  line-height: 1.4;
`;

export const TimeCont = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.color.primary.main};
`;


export const WarnCont = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.color.primary.red};
`;