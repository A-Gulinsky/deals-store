import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const A = styled(NavLink)`
  text-decoration: none;

  font-weight: 600;
  font-size: 18px;
`