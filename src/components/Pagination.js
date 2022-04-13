import React, { useState, useEffect} from 'react'
import { PaginationStyle } from './PaginationStyle'
import {useDispatch, useSelector} from 'react-redux'
import { fetchListPokemon } from '../redux/actionCreators'

const Pagination = () => {
  const dispatch = useDispatch()
  const { totalPoke, itemTypesList } = useSelector(state => state)
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (itemTypesList.length > 0) {
      dispatch(fetchListPokemon(itemTypesList.slice(0, 20)))
    } else {
      dispatch(fetchListPokemon(`https://pokeapi.co/api/v2/pokemon/?offset=${itemOffset}&limit=20`))
    }
  }, [dispatch, itemOffset, itemTypesList])
 
  const handlePageClick = (event) => {
    if (itemTypesList.length > 0) {
      dispatch(fetchListPokemon(itemTypesList.slice(event.selected * 20, event.selected * 20 + 20)))
    } else {
      setItemOffset(event.selected * 20);
    }
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  }
  
  return (
      <PaginationStyle
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        onClick={handleScroll}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(totalPoke / 20)}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        className="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        pageClassName="page-li"
        previousClassName="previous"
        nextClassName="next"
        disabledClassName="disabled"
      />
  )
}

export default Pagination