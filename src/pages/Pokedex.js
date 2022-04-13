import React, { useEffect , useState} from 'react'
import HeaderPokedex from '../components/HeaderPokedex'
import { Form } from '../components/Form'
import { Input} from '../components/Input'
import { Button } from '../components/Button'
import { Text } from '../components/Text'
import { Container } from '../components/Container'
import PokeList from '../components/PokeList'
import { fetchListTypes, fetchListTypeSelected, fetchListPokemon, fetchQuery } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
import {SelectedStyled} from '../components/SelectedStyled'
import {Alert} from '../components/Alert'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Pokedex = () => {
  const dispatch = useDispatch()
  const { listType, name, itemTypesList, querySearch } = useSelector(state => state)
  const [input, setInput] = useState("")
  const [pokemons, setPokemons] = useState([])
  const [suggestions, setSuggestions] = useState([])
  
  let navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchListTypes())
    
    if (itemTypesList.length > 0) {
      dispatch(fetchListPokemon(itemTypesList.slice(0,20)))
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1126&offset=0`)
      .then((resp) => setPokemons(resp.data.results))
    
  }, [dispatch, itemTypesList, querySearch])

  const createSuggestions = () => {

    if (input.length > 2) {
      let regex = new RegExp(`^${input.toLowerCase()}`, 'g')
      let arraySuggestions = pokemons.filter(char => char.name.match(regex))
      setSuggestions(arraySuggestions)
    }
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchQuery(input))
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input}/`)
    .then(() => navigate(`/pokedex/${input}`))
    setInput("")
  }
  
  const handleSelect = (e) => {
    dispatch(fetchListTypeSelected(e.value))
  }

  const options = []

  listType.map(el => {
    return options.push({value: el.url, label: el.name})
  })
  
  return (
    <main>
      <HeaderPokedex />
      <Container maxWidth="1350px">
        <Text> <span>Welcome {name},</span> here you will find your favorite pokemon</Text>

        <Container grid>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={(e) => { setInput(e.target.value); createSuggestions() }}
              placeholder="look for a pokemon"
              value={input}
              list="pokemons"
            />
            <datalist id="pokemons">
              {suggestions.map(el => (<option value={el.name} key={el.name}/>))}
            </datalist>
            <Button>Search</Button>
            <Alert >{querySearch.error}</Alert>
          </Form>
          <SelectedStyled options={options} onChange={handleSelect} placeholder="filter by type"/>
        </Container>
      </Container>
      <PokeList/>
    </main>
  )
}

export default Pokedex;