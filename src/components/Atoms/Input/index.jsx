import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

const Input = (props) => {
  function InputDeleteEnterKey(e) {
    if (e.key === "Enter") {
      props.onEditComplete;
    }
  }
  return (
    <InputWrapper>
      <input
        type="text"
        onBlur={props.onEditComplete}
        onKeyPress={InputDeleteEnterKey}
        onEditComplete={props.onEditComplete}
        defaultValue={props.defaultValue}
      ></input>
    </InputWrapper>
  );
};
export default Input;

const InputWrapper = styled.div`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  font-weight: 500;
  ${TEXT.S}
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  padding: 0 4px;
  width: 232px;
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
