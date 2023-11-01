
import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  border: 1px solid black;
  outline: none;
  border: none;
  border-radius: 20px;
  margin-left: 25px;

  width: 60%;

`

export const Input = styled.input`
  padding: 12px 5px 12px 25px;
  width: 100%;

  border: none;
  outline: none;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  background-color: #dad9d9;
  color: #474156;
  font-size: 14px;
  font-weight: 600;

  &::placeholder {
    font-size: 14px;
    font-weight: 600;
    color: #474156;
  }
`

export const Button = styled.button`
  width: 70px;
  padding: 0;
  border: none;
  background-color: #58C26A;
  outline: none;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  cursor: pointer;
`