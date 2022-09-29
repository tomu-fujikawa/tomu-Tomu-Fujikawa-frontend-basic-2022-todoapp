import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue }) => {
  const InputDeleteEnterKey = (e) => {
    if (e.key === "Enter") {
      onEditComplete(ref.current.value);
    }
  };
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
    ref.current.onBlur = { onEditComplete };
    ref.current.onKeyPress = { InputDeleteEnterKey };
    ref.current.addEventListener("keypress", InputDeleteEnterKey);
  }, []);

  return (
    <InputWrapper>
      <input ref={ref} defaultValue={defaultValue} type="text" />
    </InputWrapper>
  );
};
export default Input;

const InputWrapper = styled.div`
  font-weight: 500;
  ${TEXT.S}
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  padding: 0 4px;
  height: 20px;
  & > input {
    width: 100%;
    height: 100%;
    color: ${COLOR.LIGHT_GRAY};
    background-color: ${COLOR.BLACK};
    border: none;
    outline: none;
  }
`;
