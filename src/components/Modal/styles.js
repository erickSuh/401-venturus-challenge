import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  &.hidden {
    z-index: -1;
  }
`;

export const Mask = styled(Container)`
  z-index: 10001;

  &.hidden {
    display: none;
  }
`;

export const ModalPanel = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s cubic-bezier(0, 0, 0.25, 1), opacity 500ms cubic-bezier(0, 0, 0.25, 1);
  z-index: 10002;

  &.hidden{
    transform: translate3d(0, 100px, 0);
    opacity: 0;
    z-index: -1;
    overflow: hidden;
  }
`;
