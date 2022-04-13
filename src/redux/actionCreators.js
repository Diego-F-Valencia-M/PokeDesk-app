import {
  SET_NAME,
  SET_POKEMON_LIST,
  SET_LIST_TYPES,
  SET_TOTAL_POKE,
  SET_ITEMS_TYPE,
  QUERY_FORM,
  CLEAN_QUERY_FORM
} from './actionTypes';
import axios from 'axios';

export const fetchListPokemon = (url) => {
  return async (dispatch) => {
    let arrayPromises = null;
    if (typeof url === 'string') {
      const response = await axios.get(url)
      dispatch(setTotalPoke(response.data.count))
      arrayPromises = response.data.results.map(char => axios.get(char.url))
    } else {
      arrayPromises = url.map(char => axios.get(char.pokemon.url))
    }
    Promise.all(arrayPromises).then(resp => dispatch(setPokemonList(resp)));
  }
}

export const fetchListTypeSelected = (url) => {
  return async (dispatch) => {
    const response = await axios.get(url)
    dispatch(setTotalPoke(response.data.pokemon.length))
    dispatch(setItemsType(response.data.pokemon))
  }
}

export const fetchListTypes = () => {
  return async (dispatch) => {
    const response = await axios.get('https://pokeapi.co/api/v2/type/')
    dispatch(setListType(response.data.results))
  }
}

export const fetchQuery = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}/`)
      dispatch(setQueryForm(response))
    } catch (e) {
      dispatch(setQueryForm({ error: 'pokemon not found, please try again' }))
      // console.clear()
    }
  }
}

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  }
}

export const setPokemonList = (data) => {
  return {
    type: SET_POKEMON_LIST,
    payload: data,
  }
}


export const setListType = (data) => {
  return {
    type: SET_LIST_TYPES,
    payload: data,
  }
}

export const setTotalPoke = (data) => {
  return {
    type: SET_TOTAL_POKE,
    payload: data,
  }
}

export const setItemsType = (data) => {
  return {
    type: SET_ITEMS_TYPE,
    payload: data,
  }
}

export const setQueryForm = (data) => {
  return {
    type: QUERY_FORM,
    payload: data,
  }
}

export const cleanQueryForm = ( ) => {
  return {
    type: CLEAN_QUERY_FORM
  }
}