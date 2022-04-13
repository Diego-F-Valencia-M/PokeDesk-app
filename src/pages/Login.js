import React, { useState } from 'react'
import { Wrapper } from '../components/Wrapper'
import { Heading} from '../components/Heading'
import { Input} from '../components/Input'
import { Button} from '../components/Button'
import { Form } from '../components/Form'
import { Container } from '../components/Container'
import DecorationPoke from '../components/DecorationPoke'
import { Logo } from '../components/Logo'
import { setName } from '../redux/actionCreators'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const Login = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(setName(input))
      navigate("/pokedex")
    }
  }

  return (
    
    <Wrapper grid>
      <Container className='text-center'>
        <Logo src="./PokeLogo.png" alt="logo"/>
        <Heading>Hello coach!</Heading>
        <Form onSubmit={ handleSubmit }>
          <label>Enter your name to get started</label>
          <Input onChange={(e) => setInput(e.target.value)} value={input} width="50%"/>
          <Button>Start</Button>
        </Form>
      </Container>
      <DecorationPoke right="50%"/>
    </Wrapper>
    
  )
}

export default Login