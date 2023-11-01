import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ParentMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 280px;
  height: 370px;
  z-index: 999;

`

export const MobileMenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: #e6e5e5;
  
  overflow: hidden;

  border: 1px solid #2e037f;
  border-bottom-left-radius: 20px;
`