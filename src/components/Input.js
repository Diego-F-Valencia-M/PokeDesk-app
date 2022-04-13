import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  display: ${(props) => props.width && 'block'};
  margin: 0 ${(props) => props.width ? 'auto' : '0'};
  max-width: 690px;
  height: 42px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  font-size: 1.4rem;
  padding-inline: 0.5rem;

  @media (max-width: 700px){
      margin-inline: auto;
      width: 100%;
  }
`