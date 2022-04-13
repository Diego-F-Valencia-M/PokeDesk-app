import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colour.primary};
  color: ${({ theme }) => theme.colour.base};
  border: 1px solid ${({ theme }) => theme.colour.primary};
  margin-block: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.colour.primary};
    background-color: ${({ theme }) => theme.colour.base};
    border: 1px solid ${({ theme }) => theme.colour.primary};
  }

  @media (min-width: 1314px){
    margin-inline: ${({ theme }) => theme.spacing.sm};
  }
`