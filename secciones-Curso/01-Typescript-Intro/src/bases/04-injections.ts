import {
  PokeApiAdapter,
  PokeApiFecthAdapater,
  type HtttAdapter,
} from "../api/pokeApi.adapter";
import {
  type Move,
  type PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HtttAdapter // Todo: inyectar dependencias
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFecth = new PokeApiFecthAdapater();
export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);
charmander.getMoves();
