import styled from "styled-components";
import Select from 'react-select'

export const SelectedStyled = styled(Select)`
  width: 100%;
  display: inline-block;
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  

  @media (max-width: 700px){
      width: 100%;
      margin:0  auto;
      margin-block: 0.5rem;
  }

  @media (min-width: 1341px){
      margin-block: 0.4rem;
  }
`
