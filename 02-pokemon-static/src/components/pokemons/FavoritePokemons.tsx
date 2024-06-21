import type { FavoritePokemon } from '@interfaces/favoritePokemon'
import { For, createSignal, type Component } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemonCard'

interface Props {}

const getLocalStoragePokemons = (): FavoritePokemon => {
  const favoritePokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]')

  return favoritePokemons
}

export const FavoritePokemons: Component<Props> = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {pokemon => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  )
}
