import React from 'react'
import { Container } from './Container'
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardInfo,
  CardDetail,
  CardSubTitle
} from './Card'
import {  useSelector } from 'react-redux'
import { LinkPoke } from './LinkPoke'
import Pagination from './Pagination'


const PokeList = () => {
  const { listPokemons } = useSelector(state => state)

  const handleScroll = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Container maxWidth="1400px" flex>
        {
          listPokemons?.map(el => (
        <LinkPoke to={`/pokedex/${el.data.id}`} key={el.data.id} onClick={handleScroll}>
          <Card >
            <CardImg src={el.data.sprites.other.dream_world.front_default || el.data.sprites.other.home.front_default || "./pokeball_PNG32.png"} alt="pokemon" />
              <CardTitle>{el.data.name}</CardTitle>
              <CardText>{el.data?.types?.map(e => <span key={e.slot}>{e.type.name}, </span>)}</CardText>
            <CardSubTitle> Type </CardSubTitle>
            <CardInfo>
              <CardDetail>
                <CardText> <span> HP </span></CardText>
                <CardText>{el.data.stats[0].base_stat}</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> Attack </span></CardText>
                <CardText>{el.data.stats[1].base_stat}</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> Defense </span></CardText>
                <CardText>{el.data.stats[2].base_stat}</CardText>
              </CardDetail>
              <CardDetail>
                <CardText><span> Speed </span></CardText>
                <CardText>{el.data.stats[5].base_stat}</CardText>
              </CardDetail>
            </CardInfo>
            </Card>
        </LinkPoke>
        ))
      }
      </Container>
      <Pagination />
    </>
  )
}

export default PokeList