import styled from "@emotion/styled";

export const CommunicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const InputTitle = styled.b`
  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 16px;
  color: #ffffffc0;
`

export const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  margin: 0;
  padding: 10px;

  background-color: transparent;
  border: 1px solid transparent;
  border: ${props => props.active && '1px solid #ffffffc7'};
  border-radius: 100%;

  transition: 200ms;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`

// svg style
export const btnStyle = {
  width: 35,
  height: 35,
  fill: '#ffffffd0'
}