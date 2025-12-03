export const pokemonIds = [1, 2, 3, 4, 3, 2, 3];
pokemonIds.push(+"1"); //conversion rapida

interface Pokemon {
  id: number;
  name: string;
  age?: number; //opcional (no viene en el objeto)
  poder: number | undefined; //viene si o si (undefine)
}

export const pikaChu: Pokemon = {
  id: 1,
  name: "pika chu",
  poder: 10,
};

export const bulbaser: Pokemon = {
  id: 1,
  name: "bulbaser",
  poder: 10,
};

//arreglo de pokemon de tipo pokenmos
export const pokemons: Pokemon[] = [];
pokemons.push(pikaChu, bulbaser);
