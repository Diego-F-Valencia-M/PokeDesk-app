import styled from "styled-components";
import { Link } from 'react-router-dom'

export const LinkPoke = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: transform 200ms ease;

  &:hover{
    transform: translateY(-1%) 
  }
`