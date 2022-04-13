import React from 'react'
import { DecorationWrapper, DecorationBlackSquare, DecorationImg } from './Decoration'

const DecorationPoke = ({right}) => {
  return (
    <DecorationWrapper>
      <DecorationBlackSquare />
      <DecorationImg src='./circlePoke.png' alt='icon poke ball' right={right}/>
    </DecorationWrapper>
  )
}

export default DecorationPoke