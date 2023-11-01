import styled from "@emotion/styled";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
`

export const TextAreaTitle = styled.b`
  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #ffffffc0;
  letter-spacing: 0.1em;
`

export const TextAreaStyled = styled.textarea`
  width: 90%;
  height: 80px;
  padding: 10px;

  color: #ffffffcc;

  background-color: transparent;
  border-radius: 2px;

  resize: none;
  outline: none;
`