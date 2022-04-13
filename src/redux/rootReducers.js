import { combineReducers } from 'redux'
import {
  reducerListPokemon,
  reducerName,
  reducerListTypes,
  reducerTotalPoke,
  reducerSetItemsType,
  reducerQuery
} from './reducers'

const rootReducer = combineReducers({
  name: reducerName,
  listPokemons: reducerListPokemon,
  listType: reducerListTypes,
  totalPoke: reducerTotalPoke,
  itemTypesList: reducerSetItemsType,
  querySearch: reducerQuery,
})

export default rootReducer;
