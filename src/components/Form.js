import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  position: relative;

  & label{
    font-size: ${({theme})=> theme.font.size.small};
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

`