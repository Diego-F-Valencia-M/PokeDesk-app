import styled from "styled-components";

export const DecorationWrapper = styled.div`
  height: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.colour.primary};
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
`

export const DecorationBlackSquare = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colour.secondary};
  position: absolute;
  bottom: 0;
  left: 0;
`
export const DecorationImg = styled.img`
  position: absolute;
  right: ${(props)=> props.right};
  bottom: 0;
  transform: translateX(50%);
  width: 20%;
  max-width: 100px;
`
