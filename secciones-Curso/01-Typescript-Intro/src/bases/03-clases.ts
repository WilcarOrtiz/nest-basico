import axios from "axios";
import type {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

//forma tradicional

export class pokemon2 {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const charmander2 = new pokemon2(1, "Charmander");

//forma comun

//readonly: quita la propiedad de modicar valor de los atributos

export class pokemon {
  get imageUrl(): String {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  constructor(public readonly id: number, public name: string) {}

  //metodos normales
  scream() {
    console.log(`${this.name.toUpperCase()}!!!!!`);
  }

  speak() {
    console.log(`${this.name}`);
  }

  //meotodos asincronos
  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

export const charmander = new pokemon(1, "Charmander");
//console.log(await charmander.getMoves());
charmander.getMoves();
