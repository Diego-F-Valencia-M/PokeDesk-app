import styled from "styled-components";

export const Text = styled.p`
  margin-block: ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;

  & span{
    color: ${({ theme }) => theme.colour.primary};
    font-weight: bold;
  }
`