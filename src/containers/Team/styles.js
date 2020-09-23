import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 840px) {
    flex-direction: row;
  }
`;

export const SubHeader = styled.h2`
  width: 100%;
  text-align: center;
  color: #aaa;
  padding: 16px;
`;

export const SearchList = styled.div`
  width: 100%;
  max-height: 675px;
  overflow-y: auto;
`;

export const TeamFormation = styled.div`
  padding: 8px;
  display: flex; 
  align-items: center; 
  justify-content: flex-start; 
  width: 100%;

  h3 {
    margin-right: 8px;
    color: black;
  }
`;

export const TeamSquad = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;
