import styled, {css} from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  position: relative;
  
  ${props =>
  props.grid && css`
      display: grid;
      place-content: center;
    `
  }

`