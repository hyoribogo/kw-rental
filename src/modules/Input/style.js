import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  outline: none;
  padding: 5px 7px;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  &::placeholder {
    color: ${(props) => props.theme.color.text.gray};
  }
  &.title {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin: 7px 0;
  }

  &.rentalUser {
    width: 115px;
    height: 27px;
    text-align: center;
    font-size: 14px;
    color: ${(props) => props.theme.color.gray.g3};
  }

  &.propertyNum {
    width: 150px;
    font-size: 15px;
    padding: 6px 0;
    text-align: center;
    border-radius: 5px;
    &::placeholder {
      text-align: center;
    }
    &:disabled {
      background-color: ${(props) => props.theme.color.primary.sub};
      color: ${(props) => props.theme.color.gray.g5};
    }
  }

  &[type="number"] {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
