import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(230deg,#532d8c 0%,#f2295b 100%);
`;

export const IconContainer = styled.a`
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

export const Icon = styled.div`
  background: url("https://venturus.org.br/wp-content/themes/vent-theme/assets/css/../img/logo-new.svg") left top;
  background-size: 95px 56px;
  overflow: hidden;
  width: 32px;
  height: 50px;
  padding-bottom: 8px;
  margin: 0 8px 0 16px;
`;
