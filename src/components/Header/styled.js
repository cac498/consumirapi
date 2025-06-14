import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 15px 0 0;
    font-weight: bold;
  }
`;
