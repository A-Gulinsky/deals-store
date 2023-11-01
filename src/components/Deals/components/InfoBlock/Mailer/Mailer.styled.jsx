import styled from "@emotion/styled";

export const MailerContainer = styled.div`
  width: 246px;
  background-color: #24144E;
  padding: 15px 20px 40px 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.h3`
  color: #f6f0f0f3;
  font-size: 16px;
  font-weight: 500;
`

export const Label = styled.label`
  display: flex;
  border: 1px solid black;
  outline: none;
  border: none;
  border-radius: 20px;

  width: 100%;
`

export const Input = styled.input`
  padding: 12px 5px 12px 8px;
  width: 100%;

  border: none;
  outline: none;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  background-color: #ffffff;
  color: #351D73;
  font-size: 14px;
  font-weight: 600;

  &::placeholder {
    font-size: 14px;
    font-weight: 600;
    color: #351D73;
  }
`

export const Button = styled.button`
  width: 70px;
  padding: 0 9px 0 3px;
  border: none;
  background-color: #549760;
  outline: none;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  
  color: #ffffffe4;

  cursor: pointer;
`