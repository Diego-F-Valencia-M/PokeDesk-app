
import { SET_NAME, SET_POKEMON_LIST, SET_LIST_TYPES, SET_TOTAL_POKE, SET_ITEMS_TYPE, QUERY_FORM, CLEAN_QUERY_FORM } from './actionTypes'

export const reducerListPokemon = (state = [], action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return action.payload
    default:
      return state
  }
}

export const reducerName = (state = "", action) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload
    default:
      return state
  }
}

export const reducerListTypes = (state = [], action) => {
  switch (action.type) {
    case SET_LIST_TYPES:
      return action.payload
    default:
      return state
  }
}

export const reducerTotalPoke = (state = [], action) => {
  switch (action.type) {
    case SET_TOTAL_POKE:
      return action.payload
    default:
      return state
  }
}

export const reducerSetItemsType = (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS_TYPE:
      return action.payload
    default:
      return state
  }
}

export const reducerQuery = (state = [], action) => {
  switch (action.type) {
    case QUERY_FORM:
      return action.payload;
    case CLEAN_QUERY_FORM:
      return [];
    default:
      return state
  }
}