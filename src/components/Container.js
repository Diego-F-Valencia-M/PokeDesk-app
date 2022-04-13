import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: ${props => props.maxWidth};
  margin: 5rem auto;

  ${props =>
  props.flex && css`
      display: flex;
      flex-wrap: wrap;
      gap: 47px;
      justify-content: center;
    `
  }

  ${props => props.grid && css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      width: 100%;
      gap: 10px;
      margin: 2rem 0;
      align-items: start;

      @media (max-width: 702px){
        display: block;
      }
  `}

  ${props => props.grid2 && css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      width: 100%;
      gap: 10px;
      margin: 2rem auto;
      align-items: start;

      @media (max-width: 702px){
        display: block;
      }
  `}
`