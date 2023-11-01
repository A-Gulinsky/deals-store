import styled from "@emotion/styled"

import { motion } from "framer-motion"

export const Label = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 10px;

  border: 1px solid #615e5e;
  border-radius: 4px;

  transition: 200ms;

  &:hover ,
  &:focus{
    box-shadow: 0px 0px 2px 2px #d5d2d24a;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 8px;

  font-size: 16px;
  color: #ffffffc6;

  background-color: transparent;
  border-radius: 4px;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  outline: transparent;

  &::placeholder {
    color: white;
  }
`

export const P = styled(motion.p)`
  position: absolute;
  bottom: -22px;
  left: 0;

  margin-bottom: 5px;

  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #c10606;
  letter-spacing: 0.1em;
`
