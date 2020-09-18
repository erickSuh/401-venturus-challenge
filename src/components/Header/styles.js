import styled from 'styled-components';
import Logo from './logo.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(230deg,#532d8c 0%,#f2295b 100%);
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  color: #ffffff;
  font-family: "aktiv-grotesk", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  text-decoration: none;
`;
