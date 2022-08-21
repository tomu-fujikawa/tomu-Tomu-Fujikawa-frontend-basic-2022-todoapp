import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

/*const enterDelete = (e) => {
  if (e.keyCode === 13) {
    onEditComplete();
  }
};*/
/*document.onkeydown = (event) => {
  if (event.key === "Enter") {
    onEditComplete();
  }
};*/
const Input = () => {
  /* const myInput = document.getElementById("myInput");
    myInput.addEventListener("keypress", enterDelete);*/
  const onEditComplete = () => {
    const element = document.querySelector(`input`);
    element.remove();
  };
  function enterDelete(e) {
    if (e.key === "Enter") {
      onEditComplete();
    }
  }
  return (
    <InputWrapper>
      <input
        type="text"
        /* id="myInput"*/
        onBlur={onEditComplete}
        onKeyPress={enterDelete}
        defaultValue={undefined}
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
  padding-left: 4px;
  & > input {
    color: ${COLOR.LIGHT_GRAY};
    background-color: ${COLOR.BLACK};
    border: none;
  }
  & input:focus {
    color: ${COLOR.LIGHT_GRAY};
    background-color: ${COLOR.BLACK};
    outline: none;
  }
`;
