import styled from "@emotion/styled"

import { motion } from "framer-motion"

export const BasicInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const InputTitle = styled.b`
  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  letter-spacing: 0.1em;
  font-size: 20px;

  color: #ffffffc0;
`

export const Label = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 10px;

  border: 1px solid #615e5e;
  border-radius: 4px;

  transition: 200ms;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 2px 2px #d5d2d24a;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 8px;

  &::placeholder {
    color: white;
  }

  font-size: 16px;
  color: #ffffffc5;

  background-color: transparent;
  border-radius: 4px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  outline: transparent;
`

export const P = styled(motion.p)`
  position: absolute;
  bottom: -22px;
  left: 0;

  margin-bottom: 5px;

  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #c10606;
`

// svg

export const svgStyle = {
  width: 30,
  height: 30,
  paddingRight: '10px',
  fill: '#ffffffcf',
  filter: 'drop-shadow(0px 0px 5px #2f8aeb)'
}
