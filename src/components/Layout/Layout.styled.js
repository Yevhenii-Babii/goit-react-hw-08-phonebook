import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  padding: 20px;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  &.active {
    color: pink;
  }
`;
export const Navigations = styled.nav`
  display: flex;
`;