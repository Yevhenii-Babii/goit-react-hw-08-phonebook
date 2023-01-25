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
  justify-content: center;
`;

export const ContainerFlex = styled.div`
display: flex;
gap: 20px;
justify-content: center;
margin-bottom: 50px;
margin-top: 50px;

`