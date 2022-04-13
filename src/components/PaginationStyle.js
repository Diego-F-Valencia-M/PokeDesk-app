import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const PaginationStyle = styled(ReactPaginate)`
  
  &.pagination{
    display: flex;
    gap: 1rem;
    justify-content: center;
    font-size: clamp(1rem, 5vw, 1.7rem);
    flex-wrap: wrap;

    & .previous {
      
      &.disabled a{
        color: #80808045;
      }
    
      & a{
        padding: 1.3rem;
        cursor: pointer;
      }

    }

    & .next{
    
      &.disabled a{
        color: #80808045;
      }

      & a{
        padding: 1.3rem;
        cursor: pointer;
      }
      
    }
    
    & .page-li{
      cursor: pointer;
      padding: 0;

      &.active{
        background-color: red;
        color: white;
      }

      & .page-link{
      padding: 1rem;
      }

    }
    
  }

`
