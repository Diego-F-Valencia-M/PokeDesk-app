import React from 'react'
import DecorationPoke from './DecorationPoke'
import { Header } from './Header'
import { LogoSmall } from './Logo'

const HeaderPokedex = () => {
  return (
    <Header>
      <LogoSmall src="./PokeLogo.png" alt="logo"/>
      <DecorationPoke right="70px"/>
    </Header>
  )
}

export default HeaderPokedex
