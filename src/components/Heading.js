import styled from "styled-components";

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colour.primary};
  font-size: ${({ theme }) => theme.font.size.large};
  margin-block: ${({ theme }) => theme.spacing.md};
`