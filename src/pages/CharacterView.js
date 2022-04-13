import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import HeaderPokedex from '../components/HeaderPokedex'
import { Container } from '../components/Container'
import { fetchQuery, cleanQueryForm } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import {CardOpened, CardImg, CardTitle, CardText, CardInfo, CardDetail, CardBox, CardStats, CardSubTitle, CardButton} from '../components/Card'

const CharacterView = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const querySearch = useSelector(state => state.querySearch)
  const [seeMore, setSeeMore] = useState('seeMore')
  
  useEffect(() => {
    dispatch(fetchQuery(param.id))
    return () => {
      dispatch(cleanQueryForm()) 
    }
  }, [dispatch, param])

  const handleCick = () => {
    setSeeMore(prev => {
      if (prev === 'seeMore') {
        setSeeMore('')
      } else {
        setSeeMore('seeMore')
      }
    })
  }

  
  return (
    <main>
      <HeaderPokedex />
      <Container maxWidth="1500px" grid2>
        <CardOpened>
          <CardImg src={querySearch.data?.sprites.other.dream_world.front_default || querySearch.data?.sprites.other.home.front_default || "./pokeball_PNG32.png"} alt="pokemon" />
          <CardTitle>#{querySearch.data?.order}</CardTitle>
          <CardTitle>{querySearch.data?.name}</CardTitle>
          <CardInfo maxWidth="200px">
            <CardDetail>
              <CardText>Weight</CardText>
              <CardText>{querySearch.data?.weight}</CardText>
            </CardDetail>
            <CardDetail>
              <CardText>Height</CardText>
              <CardText>{querySearch.data?.height}</CardText>
            </CardDetail>
          </CardInfo>
          <CardInfo>
            <CardDetail>
              <CardTitle>Type</CardTitle>
              {querySearch.data?.types?.map(e => <CardBox key={e.slot}>{e.type.name}</CardBox>)}
            </CardDetail>
            <CardDetail>
              <CardTitle>Abilities</CardTitle>
              {querySearch.data?.abilities?.map(e => <CardBox key={e.slot} color="#7fa091">{e.ability.name}</CardBox>)}
            </CardDetail>
          </CardInfo>
          <CardTitle>Stats</CardTitle>
          <CardDetail width="90%" margin="auto">
            <CardSubTitle className="text-left">HP</CardSubTitle>
            <CardStats stats={querySearch.data?.stats[0].base_stat}/>
            <CardSubTitle className="text-left">Attack</CardSubTitle>
            <CardStats stats={querySearch.data?.stats[1].base_stat}/>
            <CardSubTitle className="text-left">Defense</CardSubTitle>
            <CardStats stats={ querySearch.data?.stats[2].base_stat}/>
            <CardSubTitle className="text-left">Speed</CardSubTitle>
            <CardStats stats={ querySearch.data?.stats[5].base_stat}/>        
          </CardDetail>
        </CardOpened>
        <CardOpened  >
          <CardTitle>Movements</CardTitle>
          <CardDetail seeMore={seeMore} width="100%">
            {querySearch.data?.moves?.map((e, index) => <CardBox key={index} color="#708cbf">{e.move.name}</CardBox>)}
          </CardDetail>
          <CardButton onClick={handleCick}> {seeMore === 'seeMore' ? 'See More' : 'See Less'} </CardButton>
        </CardOpened>
      </Container>
    </main>
  )
}

export default CharacterView